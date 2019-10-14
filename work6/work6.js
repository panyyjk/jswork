document.write("<p>九*九空表</p>")
let level = prompt('九*九空表层数')
level = parseFloat(level) && Number(level)
if (isNaN(level)) {
    alert('九*九空表层数是数字')
}
for (let i = 1; i <10; ++i) {
    let blank = level - i;
    for (let k = 0; k < blank; k) {
        document.write('&nbsp');
    }
    let star = i * 2 - 1
    for (let j = 0; j < star; ++j) {
        document.write("<br>")
    }
    let str = '<table boder="1">'
    for (let i = 1; i < 10; ++i) {
        str += '<tr>'
        for (var j = 1; j <= i; ++j) {
            str += '<td>' + j + '*' + i + '=' + (j * i) + '</td>'
        }
        str += '</tr>'
    }
    str += '</table>'
    document.getElementById('table').innerHTML = str


}












