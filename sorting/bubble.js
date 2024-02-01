const arr = [2,34,1,5,9];
const n = arr.length;

function bubbleSort(arr,n){
  for(let i= 0 ; i< n; i++){
    for(let j=0; j < n -1 -i ; j++){
      if(arr[j+1] < arr[j]){
        [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j]  ];
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr, n));

