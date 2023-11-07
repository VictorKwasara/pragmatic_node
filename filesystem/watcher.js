const fs = require('fs');

fs.watch('target.txt', (i=5) => console.log('File cahnged!'));
console.log('Now watching target.txt for changes...');


