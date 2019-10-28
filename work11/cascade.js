function createOption(obj,data){
    for (var i in data){
        var op = new Option(data[i],i);
        obj.options.add(op);
    }
}
var collegeSelect = document.getElementById('collegeSelect');
createOption(collegeSelect,collegeSelectArr);