/*
Return a longest word from string, if there is multiple words of same length then return the first longest word in the sequence

Note: If string is empty return false


*/



/*const longestWord = (str)=>{
    if(str.trim().length === 0){           // if string is empty, trim removes whitespace from string
        return false;
    }

    let words = str.split(" ");    // split method convert the string into substring array

    words = words.sort((a, b)=> b.length - a.length)       // sort method, sorts the elements according to the unicode of characters. Capital letters come first then small letter comes.

    console.log(words); 
    
    return words.at(0);         // at(-1 returns last value in the array)
}

console.log(longestWord("a"))*/


// By reduce

const longestWords = (str)=>{
    if(str.trim().length === 0){           // if string is empty, trim removes whitespace from string
        return false;
    }

    let word = str.split(" ");    // split method convert the string into substring array

   return word.reduce((longestWord, currentWord)=> 
       (currentWord.length > longestWord.length ? currentWord : longestWord), ""   // intially the value of longestWord is empty
       )
       
    
}

console.log(longestWords("My name zindabaad"))