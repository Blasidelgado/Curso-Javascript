function numberInput(num) {
    let numbers = []
    if(num <=0) {
    return('Enter a positive integer.');
}
else {
    function fibonacci(num) {
        if(num < 2) {
            return num;
        }
        else {
            return fibonacci(num-1) + fibonacci(num - 2);
        }
    }
    for(let i = 0; i < num; i++) {
        numbers.push(fibonacci(i));    
    }
}
return numbers
}

//console.log(numberInput(6));