var fs = require('fs');

var array = fs.readFileSync('input.txt').toString().split("\n");

for (i = 0 ; i <= array.length ; i++){
    var one = parseInt(array[i]);

    for (e = 0 ; e <= array.length; e++){

        var two = parseInt(array[e])

        for( j = 0; j <= array.length; j++){


            var three = parseInt(array[j])


            var result = one + two + three;

            if(result == 2020) {

                var lel = one * two * three;

                console.log(one + 'x' + two + 'x' + three + '=' + lel);

                break;
            }

        }
        if(result == 2020){break;}
    }
    if(result == 2020){break;}
}
