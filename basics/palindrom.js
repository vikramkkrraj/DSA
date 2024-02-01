const palindrom = (num) => {
        // if(num<0){
        //     return false ; // Nagative numbers are not palindromic
        // }
        let orignalno = num;
        let reversedNum = 0;
        while(num>0){
            const digit = num % 10;
            reversedNum = reversedNum * 10 + digit;
            num = Math.floor(num/10);
        }
        console.log(reversedNum);

        // return num === reversedNum;  // it giving me false because the num is modified druing the while loop 
        return orignalno === reversedNum;  // true for num 121
}

console.log(palindrom(121));


const str1 = (2341).toString();
const revArr = str1.split('').reverse().join('');
console.log(revArr);
str1 === revArr ? console.log('palindrom') : console.log("not palindrom");

// console.log(400===400);
// const a=100;
// const b=100;
// console.log(a===b);