const fs = require('fs');

const readStream = fs.createReadStream('./trail/streamContents.txt/', { encoding: 'utf8' });
const createStream = fs.createWriteStream('./trail/CreateStreamContents.txt/');

// readStream.on('data', (chunk) => {
//   console.log('---NEW CHUNK---');  
//   console.log(chunk);  

//   //writing new data
//   createStream.write('\n NEW CHUNK \n');
//   createStream.write(chunk);
// })

//piping
readStream.pipe(createStream);