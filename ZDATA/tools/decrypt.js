#!/usr/bin/env node
/*
 * Giai ma 1 file .enc de kiem tra cuc bo truoc khi commit / khi can lay lai file goc.
 * Usage:
 *   node decrypt.js <file.enc> <duong-dan-output>
 *   node decrypt.js <file.enc> <mat-khau> <duong-dan-output>
 */
const fs = require('fs');
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

async function main() {
  const args = process.argv.slice(2);
  let encPath, password, outPath;

  if (args.length === 2) {
    [encPath, outPath] = args;
  } else if (args.length === 3) {
    [encPath, password, outPath] = args;
  } else {
    console.error('Usage: node decrypt.js <file.enc> [mat-khau] <duong-dan-output>');
    process.exit(1);
  }

  if (!fs.existsSync(encPath)) {
    console.error(`Khong tim thay file: ${encPath}`);
    process.exit(1);
  }

  if (!password) {
    password = await promptHidden('Nhap mat khau: ');
  }

  const buf = fs.readFileSync(encPath);
  const salt = buf.subarray(0, SALT_LEN);
  const iv = buf.subarray(SALT_LEN, SALT_LEN + IV_LEN);
  const authTag = buf.subarray(buf.length - TAG_LEN);
  const ciphertext = buf.subarray(SALT_LEN + IV_LEN, buf.length - TAG_LEN);

  const key = crypto.pbkdf2Sync(password, salt, ITERATIONS, KEY_LEN, 'sha256');
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
  decipher.setAuthTag(authTag);

  try {
    const plaintext = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
    fs.writeFileSync(outPath, plaintext);
    console.log(`Da giai ma -> ${outPath}`);
  } catch (err) {
    console.error('Sai mat khau hoac file bi hong.');
    process.exit(1);
  }
}

main();
