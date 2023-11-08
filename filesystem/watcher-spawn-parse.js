const fs =  require('fs')
const spawn = require('child_process').spawn;
const filename = process.argv[2];

fs.watch(filename, () => { 
  const ls = spawn('ls', ['-l', '-h', filename]);
  let output = '';

  ls.stdout.on('data',
    (data) =>{ output += data ;}
  );

  ls.on('close', () => {
    const parts = output.split(/\s+/);
    console.log(parts);
  });
});
console.log("Listening baby")
