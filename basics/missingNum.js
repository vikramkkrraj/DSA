const missingNum =(arr) => {

    const n = arr.length;
    console.log(n); 

    let sum = 0;

    for(let i=0; i<n; i++){
        sum += arr[i];
    }

    return n*(n+1)/2 - sum;
}

console.log(missingNum([3,0,1]));


// sum of n natural number is n(n+1)/2
//  3+0+1 = 4; total lenth is 3 so... 0+1+2+3 = 6 => 6-4 = 2
