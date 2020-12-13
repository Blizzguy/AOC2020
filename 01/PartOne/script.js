var fs = require('fs');

var array = fs.readFileSync('input.txt').toString().split("\n");

for (i = 0 ; i <= array.length ; i++){
    var one = parseInt(array[i]);

    for (e = 0 ; e <= array.length; e++){

        var two = parseInt(array[e])

        var result = one + two;

        if(result == 2020){

            var lel = one * two;

            console.log(one+'x'+two+'='+lel);

            break;
        }
    }
    if(result == 2020){break;}
}
