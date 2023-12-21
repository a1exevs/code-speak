const fs = require('fs');
const path = require('path');

const pathToFIle = path.join(__dirname, 'build', 'index.html');

fs.readFile(pathToFIle, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Replace all occurrences of "src="/static" with "src="./static"
  const modifiedData = data.replace(/src="\/static/g, 'src="./static');

  // Writing changed data back to the original file
  fs.writeFile(pathToFIle, modifiedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('Replacement completed successfully!');
  });
});