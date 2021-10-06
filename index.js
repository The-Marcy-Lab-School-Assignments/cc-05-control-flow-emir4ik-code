const absoluteValue = int => {
    if(isNaN(int)) {
        return 'null'
        
    }else if(int < 0) {
        return (int  - (int * 2))
    }else {
        return int;
    }
} 

//console.log(absoluteValue(35));

