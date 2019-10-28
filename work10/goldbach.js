
    function pan(num) {
        var sum = 0;
        for (var d = 1; d <= num; d++) {
            if (num % d == 0) {
                sum++;
            }
        }
        if (sum == 2) {
            return true;
        } else {
            return false;
        }
    }

    function goldbach(odd) {
        odd = document.getElementById('odd').value
        odd = parseInt(odd);
        let str = '';
        for (var b = 2; b < odd; b++) {
            var c = odd - b;
            if (pan(b) && pan(c) && b <= c) {
                str += ("偶数" + odd + "可以拆分成质数" + b + "和" + c + '<br>')
            }
            
        }
        document.getElementById('goldbach').innerHTML = str;
    }