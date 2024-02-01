/**
 * 0 1 1 2 3 5 8 13 ..... 
 */

const fibo = (n) =>{
    if(n<2){
        return n;
    }
    let prev=0, curr =1 , next;

    for(let i=2; i<=n; i++){
        next = prev+curr;
        prev = curr;  // ->1 if you change the order 1 and 2 result will differ
        curr = next;  // ->2
    }

    return next;
}

console.log(fibo(5));
