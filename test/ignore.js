/*
/ This file allows mocha to ignore non-js imports
*/

import requireHacker from 'require-hacker';

const exts = ['css'];

exts.forEach(ext => requireHacker.hook(ext, () => 'module.exports = ""'));
