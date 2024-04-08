let LCM = (n1, n2)=>{   // 5, 10
    let max = Math.max(n1, n2);  // 10
    let min = Math.min(n1, n2);  // 5

      
    for(let i = max; ; i +=max){ 
        console.log(i)  // 
        if(i % n1 === 0 && i % n2 === 0){
            return i;
        }
    }
}

let result = LCM(13, 15);
console.log(result);