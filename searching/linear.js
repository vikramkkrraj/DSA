
function linearSearch(arr,target){
    const n = arr.length;
    for(let i=0; i<n; i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([9,3,4,1,71,8], 4));

// time complexity - O(n);
// space complexity - O(1);
