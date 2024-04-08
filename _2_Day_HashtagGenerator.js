/*
Create a function that creates a hashtag format from the given string

The hashtag should be constructed as follows:
- The input string should be converted to hashtag format, where each word is capitalized and concatinated together without spaces.
- If the characters length is greater from 280 of if the input string is empty or it only contain a whitespaces then return false
- Otherwise the function should return the generated hash tag prefixed with #

generateHash("stand with saad")
- should return
#StandWithSaad

*/
/*
const generateHash = (str)=>{
    if(str.length > 280 || str.trim().length === 0){
        return false;
    }

    let words = str.split(" ")
    words = words.map((currentWord)=>
        currentWord.replace(currentWord[0], currentWord[0].toUpperCase())  
);

words = `#${words.join("")}`
    return words

    


}

console.log(generateHash(""))

*/

// 2nd Method

const generateHash = (str)=>{
    if(str.length > 280 || str.trim().length === 0){
        return false;
    }

    let words = str.split(" ")
    words = words.map((currentWord)=>
        currentWord.charAt(0).toUpperCase() + currentWord.slice(1)  
);

words = `#${words.join("")}`
    return words

    


}

console.log(generateHash("pakistan zindabad"))