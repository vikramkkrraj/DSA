const sumOfNaturalNumber = (num) => {
    let sum = 0;
    for(let i=0; i<=num; i++){
        sum += i;
    }
    return sum;
}
const result = sumOfNaturalNumber(5);
console.log(result);