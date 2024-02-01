//

let arr = [];
const arr2 = new Array();
// console.log(arr, arr2);

 arr = ['hello', 122, { name : 'name'}];
//  console.log(arr);
//  console.log(arr.length);
//  console.log(arr[0]);
//  console.log(arr[arr.length -1]);


//  methods
arr.push([1,2,3,4]);  // add element at last
// console.log(arr); 
arr.unshift({shift : 'shift method'});  // add element at start
// console.log(arr);

const d = arr.pop();  // delete the elment from last and return deleted value
// console.log(d, "    ",arr)

console.log(arr.shift());  // delete from first and return deleted element.



// loop
// for(let i =0 ; i< arr.length ; i++){
//     console.log(arr[i]);
// }

// arr.forEach((x,i)=> {
//     console.log(i + "-->" + x);
// })

// for(let x of arr){
//     console.log(x);
// }


//1. find the target element in the arr
// const targetEl = (arr, target) => {
//     for(let i =0; i<arr.length ; i++){
//         if(target===arr[i]){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(targetEl([12,9,34,15,18], 15));
// console.log(targetEl([12,9,34,15,18], 16));


// console.log([93,25,20,29,56,26].includes(20));


// splice method
// console.log([1,2,3,4,5,6,7,8,9,10].splice(1,3));
// console.log([1,2,3,4,5,6,7,8,9].slice(1,3));



// check lodesh website
// shallow copy
const arrnum = [1,2,3,4,5,6];
const arrnum1 = arrnum;

// deep copy
// console.log(JSON.parse(JSON.stringify([1,2,3,4])))  // true one best way to deep copy
const numSpead = [...arrnum];
const numFromArrayy = Array.from(arrnum);
const numConcat = arrnum.concat();
// console.log(numFromArrayy === arrnum ? true : false);
// console.log(numSpead === arrnum ? true : false);  // false due to Address in the memory bt deep copy


// adding two or more arr
const arrAddBySpead = [...arrnum,numSpead];
const arrAddByConcat = arrnum.concat(numSpead);
console.log(arrAddByConcat);



// 2. check two arr are equal or Not?
const equalArray = (firstArr, SecondArr) => {

    // if(firstArr.length !== SecondArr.length){
    //     return false;
    // }

    // for(let i=0 ; i<firstArr.length ; i++){
    //     if(firstArr[i]!==SecondArr[i]){
    //         return false;
    //     }
    // }
    // return true;

    return firstArr.every((el, i) => firstArr[el] === SecondArr[el]);  // can use come for not equal
}

// console.log(equalArray([1,2,3],[1,2,3]));

const sortArr = [2,4,5,1,9,52,90].sort((a,b) => a-b);
// console.log(mapArr);
const reverseArr = [2,3,14,1,4,5].reverse();
// console.log(reverseArr);

const mapArr = [1,2,3,4,5].map((el, i, arr) => {
        return `${i} ---> ${el}`;
});
// console.log(mapArr);
// similary filter and reducer 


const flatArr = [[1],[1,[2,3,[4,5]]]].flat(Infinity);
console.log(flatArr);
flatArr.find()
