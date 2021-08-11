var arr = [];
var First = 0;
var second = 0;
for (var i=1; i<=5; i++){
    var num = Math.floor(Math.random()*(999-100+1)+100);
    arr.push(num);
    if(num > First){
        largest = num;
    }
}
for(let i = 0; i < arr.length; i++){
    if(second < arr[i] && arr[i] != First){
        second = arr[i];
    }
}
console.log(arr, second);