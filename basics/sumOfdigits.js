/**
 * sum of digits of number
 * 1459 = 1+4+5+9 = 19;
 * 
 * 2459 % 10 , remainder = 9
 *  
 */

const sumOfdigits = (num) => {
      let remainder = 0;
      while(num > 0 ){
        remainder += num % 10;
        console.log(remainder);
        num = Math.floor(num/10);
      }
      return remainder;
}
const result = sumOfdigits(2459);
console.log(result);
// console.log(3435/2);