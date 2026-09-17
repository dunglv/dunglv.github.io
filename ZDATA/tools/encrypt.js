#!/usr/bin/env node
/*
 * Ma hoa 1 file va them vao ZDATA/files/manifest.json.
 * File lon se tu dong duoc chia thanh nhieu chunk (~20MB/chunk) TRUOC khi ma hoa,
 * moi chunk la 1 blob git binh thuong (khong dung Git LFS - GitHub Pages KHONG serve
 * duoc noi dung LFS, chi serve pointer text nen se khong tai duoc file).
 *
 * Usage:
 *   node encrypt.js <duong-dan-file> [mat-khau] ["Ten hien thi"]
 * Neu khong truyen mat khau, script se hoi qua terminal.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const readline = require('readline');

const ITERATIONS = 100000;
const KEY_LEN = 32;
const SALT_LEN = 16;
const IV_LEN = 12;
const CHUNK_SIZE = 20 * 1024 * 1024; // 20MB moi chunk (an toan duoi nguong 50MB/100MB cua GitHub)

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

// Dinh dang moi chunk: [salt(16)][iv(12)][ciphertext][authTag(16)]
// Salt giong nhau cho moi chunk cua cung 1 file (de derive key 1 lan), IV rieng cho tung chunk.
// Dinh dang nay khop voi nhung gi trinh duyet SubtleCrypto AES-GCM mong doi khi giai ma.
function encryptChunk(data, key, salt) {
  const iv = crypto.randomBytes(IV_LEN);
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

  const id = crypto.randomBytes(8).toString('hex');
  const filesDir = path.join(__dirname, '..', 'files');
  fs.mkdirSync(filesDir, { recursive: true });

  const salt = crypto.randomBytes(SALT_LEN);
  const key = deriveKey(password, salt);

  const totalChunks = Math.max(1, Math.ceil(stat.size / CHUNK_SIZE));
  const chunkFiles = [];
  const fd = fs.openSync(inputPath, 'r');
  const buffer = Buffer.alloc(CHUNK_SIZE);

  try {
    for (let i = 0; i < totalChunks; i++) {
      const bytesRead = fs.readSync(fd, buffer, 0, CHUNK_SIZE, i * CHUNK_SIZE);
      const chunkData = buffer.subarray(0, bytesRead);
      const encryptedChunk = encryptChunk(chunkData, key, salt);
      const chunkFileName = `${id}-${i}.enc`;
      fs.writeFileSync(path.join(filesDir, chunkFileName), encryptedChunk);
      chunkFiles.push(chunkFileName);
      console.log(`  chunk ${i + 1}/${totalChunks} -> files/${chunkFileName} (${chunkData.length} bytes goc)`);
    }
  } finally {
    fs.closeSync(fd);
  }

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
    chunks: chunkFiles,
    addedAt: new Date().toISOString(),
  });

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');

  console.log(`Da ma hoa "${originalName}" thanh ${totalChunks} chunk trong files/.`);
  console.log('Nho commit thu muc ZDATA/files/ (KHONG dung git lfs). KHONG luu mat khau o bat ky dau trong repo.');
}

main();
