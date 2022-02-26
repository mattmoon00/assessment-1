

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  +    

  console.log("Welcome to the password validator tool")


reader.question("Please enter your password: ", function(password){

tokens = password.split(' ');

password = tokens[0];
~
console.log(password)

if (password.length >= 10){
     console.log("Success!")
}
else if (password.length < 10){
    console.log("Failure.")
}

reader.close()

})