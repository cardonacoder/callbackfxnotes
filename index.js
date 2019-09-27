let fs = require('fs'); // fs module allows to read files
// const readline = require('readline'); // readline provides an interface for reading data from a readable stream

// Example # 1 - Asynchronous JavaScript #3 - Callback Functions - Taken from "The code Ninja"


const vowels = ["A","E","I","O","U"], consonants = ["P","Q","R","S","T"];
//

var 
    vContainer = "", 
    cContainer ="";
//

vowels.forEach(function(v){
    vContainer = vContainer + v;
});

console.log('vContainer');
console.log(vContainer);

// Example # 2 - Another way to do the same but not using an inline callback function

function cContCallback (c){
    cContainer = cContainer + c;
}

consonants.forEach(cContCallback);
console.log('cContainer');
console.log(cContainer);


// Example 1 and 2 are Synchronous.

// Example # 3 - with an Asynchronous function


function fsCallBackFX(unError, unosDatos){
    if (unError) throw unError;
    let losDatos = JSON.parse(unosDatos);
    console.log(losDatos.repository);
}

function callBackFx(unError, unosDatos){
    if (unError) throw unError;
    let losDatos = JSON.parse(unosDatos);
    console.log(losDatos);
}


function before(){console.log("Before packageJson()");}
function readFile(){fs.readFile('package.json', fsCallBackFX);} // readFile is an aSync Fx
function after(){console.log("After packageJson()");}

// Excersise 3 - Made by AFC

function A(){ console.log('A');}
function B(){ console.log('B');}
function C(){ console.log('C');}


console.log('START - A(B(C()));');
A(B(C()));

console.log('START - C(B(A()));');
C(B(A()));




// Another examples:

console.log('Test 1: \n');
after(readFile(before()));


//Another test
function BackEndFW(){fs.readFile('BackEndFW.json', callBackFx);}
function frontEndJSFW(){fs.readFile('frontEndJSFW.json', callBackFx);}
function programmingLang(){fs.readFile('programmingLang.json', callBackFx);}

BackEndFW(frontEndJSFW(programmingLang()));


/* const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});





rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);
  
    rl.close();
}); */