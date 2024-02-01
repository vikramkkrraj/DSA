const numOfDigits = (num) => {
    let no = 0;
    while(num>0){
        num = Math.floor(num/10);
        no++;
    }
    return no;
}

console.log(numOfDigits(28929));


const string = (23455).toString();
console.log(string);
console.log(string.length);