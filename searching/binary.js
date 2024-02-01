const arr = [2,4,6,29, 91, 60];

// Note : array must be sorted

function binarySearch(arr, target){

    let start = 0;
    let end = arr.length -1;


    
    while(start <=   end){
        let mid = Math.floor((start + end)/ 2 );   
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            start = mid+1;
        }else{
            end = mid -1;
        }
    }
    return -1;
}

// Binary Search is implemented using an iterative function.
let iterativeFunction = function (sorted_arr, target) {
    let start = 0,
       end = sorted_arr.length - 1;
 
    // Iterate as long as the beginning does not encounter the end.
    while (start <= end) {
       // find out the middle index
       let mid = Math.floor((start + end) / 2);
 
       // Return True if the element is present in the middle.
       if (sorted_arr[mid] == target) return mid;
       // Otherwise, look in the left or right half
       else if (sorted_arr[mid] < target) start = mid + 1;
       else end = mid - 1;
    }
 
    return false;
 };

console.log(binarySearch([1,2,3,4,5,6,7], 5));