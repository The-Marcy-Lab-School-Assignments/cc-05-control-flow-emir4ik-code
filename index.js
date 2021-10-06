const absoluteValue = int => {
    if(isNaN(int)) {
        return 'null'
        
    }else if(int < 0) {
        return (int  - (int * 2))
    }else {
        return int;
    }
} 

// console.log(absoluteValue(35));
// console.log(absoluteValue(-35));
// console.log(absoluteValue(3.5));
// console.log(absoluteValue('avs'));


const multiplesOfFourAndSix = () => {
    let newArray = [];
    for(let i = 1; i < 101; i++) {
        if(i % 4 === 0 && i % 6 === 0) {
            newArray.push(i);
    }
}return newArray;
}
//console.log(multiplesOfFourAndSix());