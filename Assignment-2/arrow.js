const arr = [1,2,3,4,5,6,7];

const newArr =[];
for (let i=0; i<arr.lenght ;i++){
    if(arr[i] %2 ==0){
        newArr.push (arr[i]);
    }
}
console.log (newArr);