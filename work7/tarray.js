var arr = [1,2,3,4,5,6,7,8,9,2,2,4,3,2];
document.getElementById('array').innerHTML = arr.toString()
var index = 0,newArr = [];
for(var i in arr){
    if(arr[i] !=2){
        newArr[index] = arr[i];
    ++index;
    }
}
document.getElementById('transArray').innerHTML = newArr.toString()







