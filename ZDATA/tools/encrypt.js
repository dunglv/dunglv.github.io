#!/usr/bin/env node
/*
 * Ma hoa 1 file va them vao ZDATA/files/manifest.json
 * Usage:
 *   node encrypt.js <duong-dan-file> [mat-khau] ["Ten hien thi"]
 * Neu khong truyen mat khau, script se hoi qua terminal (khong hien ra man hinh khi go).
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const readline = require('readline');

const ITERATIONS = 100000;
const KEY_LEN = 32;
const SALT_LEN = 16;
const IV_LEN = 12;

const MIME_MAP = {
  '.pdf': 'application/pdf',
  '.zip': 'application/zip',
  '.rar': 'application/vnd.rar',
  '.7z': 'application/x-7z-compressed',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.txt': 'text/plain',
  '.json': 'application/json',
  '.csv': 'text/csv',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.xls': 'application/vnd.ms-excel',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.doc': 'application/msword',
  '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  '.mp4': 'video/mp4',
  '.mp3': 'audio/mpeg',
};

function guessMime(name) {
  return MIME_MAP[path.extname(name).toLowerCase()] || 'application/octet-stream';
}

function deriveKey(password, salt) {
  return crypto.pbkdf2Sync(password, salt, ITERATIONS, KEY_LEN, 'sha256');
}

// Dinh dang file .enc: [salt(16)][iv(12)][ciphertext][authTag(16)]
// Dinh dang nay khop voi nhung gi trinh duyet SubtleCrypto AES-GCM mong doi khi giai ma.
function encryptBuffer(data, password) {
  const salt = crypto.randomBytes(SALT_LEN);
  const iv = crypto.randomBytes(IV_LEN);
  const key = deriveKey(password, salt);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const ciphertext = Buffer.concat([cipher.update(data), cipher.final()]);
  const authTag = cipher.getAuthTag();
  return Buffer.concat([salt, iv, ciphertext, authTag]);
}

function promptHidden(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function main() {
  const [inputPath, passwordArg, displayNameArg] = process.argv.slice(2);

  if (!inputPath) {
    console.error('Usage: node encrypt.js <duong-dan-file> [mat-khau] ["Ten hien thi"]');
    process.exit(1);
  }
  if (!fs.existsSync(inputPath) || !fs.statSync(inputPath).isFile()) {
    console.error(`Khong tim thay file: ${inputPath}`);
    process.exit(1);
  }

  const password = passwordArg || await promptHidden('Nhap mat khau ma hoa: ');
  if (!password) {
    console.error('Mat khau khong duoc de trong.');
    process.exit(1);
  }

  const originalName = path.basename(inputPath);
  const displayName = displayNameArg || originalName;
  const stat = fs.statSync(inputPath);
  const data = fs.readFileSync(inputPath);

  const id = crypto.randomBytes(8).toString('hex');
  const encFileName = `${id}.enc`;

  const filesDir = path.join(__dirname, '..', 'files');
  fs.mkdirSync(filesDir, { recursive: true });

  const encrypted = encryptBuffer(data, password);
  fs.writeFileSync(path.join(filesDir, encFileName), encrypted);

  const manifestPath = path.join(filesDir, 'manifest.json');
  const manifest = fs.existsSync(manifestPath)
    ? JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
    : [];

  manifest.push({
    id,
    displayName,
    originalName,
    size: stat.size,
    mimeType: guessMime(originalName),
    encFile: encFileName,
    addedAt: new Date().toISOString(),
  });

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');

  console.log(`Da ma hoa "${originalName}" -> files/${encFileName}`);
  console.log('Nho commit thu muc ZDATA/files/. KHONG luu mat khau o bat ky dau trong repo.');
}

main();
