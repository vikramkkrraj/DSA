function selectionSort(arr, n){
    for(let i=0; i< n; i++){
      let minIndex = i;
      for(let j=i+1; j<n; j++){
        if(arr[j] < arr[minIndex]){
          minIndex = j;
        }
        
        if(minIndex !==i){
          [arr[j], arr[minIndex]] = [arr[minIndex], arr[j]];
        }
      }
    }
      return arr;
  }
  
  console.log(selectionSort(arr,n))

  function sele(arr,n){
    for(let i=0; i<n; i++){
      let minIndex = i;
      for(let j=i+1; j<n; j++){
        [arr[j], arr[minIndex]] = [arr[minIndex], arr[j]]
      }
    }
  }
  [3, 5, 8, 5, 99, 1]