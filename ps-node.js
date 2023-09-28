#!/usr/bin/env node

const process = require('node:process');
const path = require('node:path');

// append the current process name to the new title
var t = [ process.title ];

// Append the script node is running, this is always argv[1]
// Also run it trough path.relative, because node replaces argv[1]
// with its full path and this is way too long
t.push( path.relative(process.cwd(), process.argv[1]) );

// For the rest of the argv
for(var index=2; index < process.argv.length; index++ ) {
  var val = process.argv[ index ];
  // If the current argument is the password
  if(val === 'password' ) {
    // Append stars
    t.push( val.replace(/./g, '*') );
  } else {
    // Else append the argument as it is
    t.push( val );
  }
}

// Finaly set the visible title
process.title = t.join(' ');

const exec = require('child_process').exec

function isRunning(win, mac, linux){
    return new Promise(function(resolve, reject){

        const plat = process.platform

        console.log("plat="+plat)

        const cmd = plat == 'win32' ? 'tasklist' : (plat == 'darwin' ? 'ps -ax | grep ' + mac : (plat == 'linux' ? 'ps -A' : ''))

        console.log("cmd="+cmd)

        const proc = plat == 'win32' ? win : (plat == 'darwin' ? mac : (plat == 'linux' ? linux : ''))

        console.log("proc="+proc)

        if(cmd === '' || proc === ''){
            resolve(false)
        }
        exec(cmd, function(err, stdout, stderr) {
            resolve(stdout.toLowerCase().indexOf(proc.toLowerCase()) > -1)
        })
    })
}

// isRunning('myprocess.exe', 'myprocess', 'myprocess').then((v) => console.log(v))
isRunning('node.exe', 'node', 'node').then((v) => console.log(v))
