function calc(func){
    let result = document.getElementById('result')
    let num = parseInt(document.getElementById('num').value)
    if(num % 2){
        alert('请输入偶数')
        return false
    }
    result.value = func(num)
}
function odd(num){
    
}