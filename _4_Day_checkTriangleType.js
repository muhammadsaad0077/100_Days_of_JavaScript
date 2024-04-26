const checkTriangleType = (a, b, c)=>{
    if(a === b && b===c){
        return "Equilateral Triagnle"
    }
    else if(a === b || b=== c || a ===c){
        return "Isosceles Triangle"
    }
    else{
        return "Scelene Triangle"
    }
}

console.log(checkTriangleType(12, 12, 12))