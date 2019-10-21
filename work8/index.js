function sort(method) {
    let origin = document.getElementById('origin').value
    let logs
    console.log(method)
    if (method == 'bubble') {
        logs = bubbleSort(origin)
    } else if (method == 'insert') {
        logs = insertSoet(origin)
    }
    showDiv = document.getElementById('Anim')
    showDiv.innerHTML = logs
}