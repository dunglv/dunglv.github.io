#!/usr/bin/env node
/*
 * Giai ma 1 file da upload (theo id trong manifest.json) de kiem tra cuc bo
 * truoc khi commit / khi can lay lai file goc. Tu dong ghep lai cac chunk theo dung thu tu.
 *
 * Usage:
 *   node decrypt.js <id-hoac-ten-file-goc> <duong-dan-output>
 *   node decrypt.js <id-hoac-ten-file-goc> <mat-khau> <duong-dan-output>
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const readline = require('readline');

const ITERATIONS = 100000;
const KEY_LEN = 32;
const SALT_LEN = 16;
const IV_LEN = 12;
const TAG_LEN = 16;

function promptHidden(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

function decryptChunk(buf, password) {
  const salt = buf.subarray(0, SALT_LEN);
  const iv = buf.subarray(SALT_LEN, SALT_LEN + IV_LEN);
  const authTag = buf.subarray(buf.length - TAG_LEN);
  const ciphertext = buf.subarray(SALT_LEN + IV_LEN, buf.length - TAG_LEN);

  const key = crypto.pbkdf2Sync(password, salt, ITERATIONS, KEY_LEN, 'sha256');
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
  decipher.setAuthTag(authTag);
  return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
}

async function main() {
  const args = process.argv.slice(2);
  let ref, password, outPath;

  if (args.length === 2) {
    [ref, outPath] = args;
  } else if (args.length === 3) {
    [ref, password, outPath] = args;
  } else {
    console.error('Usage: node decrypt.js <id-hoac-ten-file-goc> [mat-khau] <duong-dan-output>');
    process.exit(1);
  }

  const filesDir = path.join(__dirname, '..', 'files');
  const manifestPath = path.join(filesDir, 'manifest.json');
  if (!fs.existsSync(manifestPath)) {
    console.error('Khong tim thay manifest.json');
    process.exit(1);
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const entry = manifest.find((e) => e.id === ref || e.originalName === ref || e.displayName === ref);
  if (!entry) {
    console.error(`Khong tim thay entry nao khop voi "${ref}" trong manifest.json`);
    process.exit(1);
  }

  const chunkFiles = entry.chunks || (entry.encFile ? [entry.encFile] : []);
  if (!chunkFiles.length) {
    console.error('Entry nay khong co chunk nao.');
    process.exit(1);
  }

  if (!password) {
    password = await promptHidden('Nhap mat khau: ');
  }

  try {
    const parts = chunkFiles.map((chunkFile) => {
      const buf = fs.readFileSync(path.join(filesDir, chunkFile));
      return decryptChunk(buf, password);
    });
    fs.writeFileSync(outPath, Buffer.concat(parts));
    console.log(`Da giai ma ${chunkFiles.length} chunk -> ${outPath}`);
  } catch (err) {
    console.error('Sai mat khau hoac file bi hong.');
    process.exit(1);
  }
}

main();
