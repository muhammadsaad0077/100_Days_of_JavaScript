let number = 5;

if(number < 0){
    console.log("Enter Valid Number")
}

else if(number === 0){
    console.log("The factorial of 0 is 1");
}

else{
    let result = 1;
    for(let i = 1; i<=number; i++){
        result *= i;
    }
    console.log(`The factorial of ${number} is ${result}`);
}