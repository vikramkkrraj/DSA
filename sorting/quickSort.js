const arr = [3, 5, 8, 5, 99, 1];

function quickSort(arr){
    // boundary case
    if(arr.length <=1){ 
        return arr;     
    };

    // pivot value is first element of array;
    let pivot = arr[0];

    // create two arrays to store the values lesser and greater than pivot 
    let leftArr = [];
    let rightArr = [];

    // iterate from the arr except pivot and store the value accodindly.
    for(let i=1; i<arr.length ; i++){
        if(arr[i] < pivot){
            leftArr.push(arr[i]);
        }else{
            rightArr.push(arr[i]);
        }
    }
        // at last recursively call quicksort for leftarr and rightarr and get single elment pivot and return
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort(arr));



// Note : you can choose the pivot value among(first element , middle element and last element)