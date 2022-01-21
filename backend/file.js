const fs = require('fs');
const util = require('util');

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

const readFile = async (path) => await readFilePromise(path, 'utf8');
const writeFile = writeFilePromise;

module.exports = {
  File: {
    readFile,
    writeFile
  },
}

