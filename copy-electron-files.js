const fs = require('fs');
const path = require('path');

// Source and destination directories
const sourceDir = path.join(__dirname, 'dist', 'electron');
const destinationDir = path.join(__dirname, 'build');

// Read the source directory
fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error('Failed to read source directory', err);
    return;
  }

  files.forEach(file => {
    // Source and destination paths for each file
    const sourcePath = path.join(sourceDir, file);
    const destinationPath = path.join(destinationDir, file);

    // Copy the file
    fs.copyFile(sourcePath, destinationPath, (err) => {
      if (err) {
        console.error(`Failed to copy ${file}`, err);
      } else {
        console.log(`${file} was successfully copied!`);
      }
    });
  });
});