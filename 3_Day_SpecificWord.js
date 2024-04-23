/*
Create a function which returns a number of specific words from the string

Note: 
Character should count same letter in both case that is Upper and Lower


*/

const findWord = (word, char)=>{
    word = word.toLowerCase()
    char = char.toLowerCase()

    totalCount = word.split("").reduce((accum, current)=>{
        if(current === char){
            
            accum++;
        }
        
        return accum;
        
        
    }, 0);
    return totalCount
}


console.log(findWord("My name is Saad", "a"))