// Program to tell wheather the number is prime or not
let num = 25;

if(num === 2 || num === 3){
    console.log(`${num} is a Prime Number`);
    return;
}

else if(num === 5){
    console.log(`${num} is a Prime Number`);
    return;
}

else if(num % 2 === 0 || num % 3 === 0){
    console.log(`${num} is not a Prime Number`);
}

else if(num % 5 === 0){
    console.log(`${num} is not a Prime Number`)
}

else{
    console.log(`${num} is a Prime Number`);
}

