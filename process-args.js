#!/usr/bin/env node

const { argv } = require('node:process');
const process = require('node:process');
const path = require('node:path');

const { cwd } = require('node:process');

console.log(`cwd=${cwd()}`);

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
