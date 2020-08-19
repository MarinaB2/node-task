

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('Choose an option : ');
console.log(' 1.Read package.json ');
console.log(' 2. Display OS info ');
console.log(' 3. start HTTP server');
rl.question('Type a number: ', (answer) => {

    if(answer.match(1)){
        const fs = require('fs');
        fs.readFile(__dirname + '/package.json', 'utf-8', (err, content) => {
            console.log(content);
        })
     
       }
   else if (answer.match(2)){

        const os = require('os');
        console.log('SYSTEM MEMORY', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + ' GB');
        console.log('FREE MEMORY', (os.freemem()/ 1024 / 1024 / 1024).toFixed(2) + ' GB');
        console.log('CPU core', os.cpus().length );
        console.log('ARCH', os.arch() );
        console.log('Platform', os.platform() );
        console.log('Release', os.release() );
        console.log('User', os.userInfo().username);
    }
     
    else if (answer.match(3)){
     const http = require('http');
     const hostname = '127.0.0.1';
     const port = 3000;

     const server = http.createServer((req, res) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Hello World');
});

    server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
}
else{
    console.log(`invalid option has been chosen: ${answer}`);
}
  
  rl.close();
});


