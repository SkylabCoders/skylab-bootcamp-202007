function showNumbers(num) {
    document.getElementById('result').innerHTML=num;
}


var operator = document.getElementsByClassName('operator');
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        var output = document.getElementById("result").innerHTML;
        if (this.id == 'ac') {
            showNumbers('');
        } else if (this.id == 'delete') {
            var output = document.getElementById("result").innerHTML;
            output= output.substr(0, output.length - 1);
            showNumbers(output);
        } else {
            if (this.id == '=') {
                var show = eval(output);
                showNumbers(show);
                return;
            }
            output = output + this.id;
            showNumbers(output);
        }
        
    } )
}


var number = document.getElementsByClassName('number');
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = document.getElementById("result").innerHTML;
        output = output + this.id;
        showNumbers(output);
    } )
}








