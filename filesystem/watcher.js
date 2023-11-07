const fs = require('fs');

fs.watch('target.txt',function(i="5 ooo"){ console.log('File changed!', i)});
console.log('Now watching target.txt for changes...');


