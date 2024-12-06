// Example in Node.js
const fs = require('fs');

// Define the path to a file or directory.
const path = 'abc.txt';

// Check if the path refers to a file or a directory.
fs.stat(path, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  if (stats.isDirectory()) {
    console.log('It is a directory');
  } else if (stats.isFile()) {
    console.log('It is a file');
  } else {
    console.log('It is a special file (e.g., socket, FIFO, device file)');
  }
});
