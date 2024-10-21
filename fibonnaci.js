function checkFibonacci(numberToCheck) {    
    let a = 0;
    let b = 1;
    let temp;

    while (a < numberToCheck) {
        temp = a;
        a = b;
        b += temp;
    }

    return (a === numberToCheck);
}
    
const numberToCheck = 13;

if (checkFibonacci(numberToCheck)) {
    console.log(`${numberToCheck} pertecene à sequência de Fibonacci`);
} else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}