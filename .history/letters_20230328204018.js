
letterCombinations("23");
function letterCombinations(digits) {

    let output_arr = [];
    let one_arr = [] ;

    let length = digits.length;

    if (length == 0) {
        return output_arr;
    }
    else {
        let digit = digits.split('')
        for (let i = 0; i < digit.length; i++) {
            switch (parseInt(digit[i])) {
                case 2:
                    one_arr.push(["a", "b", "c"])
                    break;
                case 3:
                    one_arr.push(["d", "e", "f"])
                    break;

                case 4:
                    one_arr.push(["g", "h", "i"])
                    break;

                case 5:
                    one_arr.push(["j", "k", "l"])
                    break;

                case 6:
                    one_arr.push(["m", "n", "o"])
                    break;


                case 7:
                    one_arr.push(["p", "q", "r", "s"])
                    break;

                case 8:
                    one_arr.push(["t", "u", "v"])
                    break;

                case 9:
                    one_arr.push(["w", "x", "y", "z"])
                    break;

                default:

            }
        }
        console.log(one_arr);
        for (let j = 1; j < one_arr.length; j++) {
            for (let k = 0; k < one_arr[j].length; k++) {
                output_arr.push(one_arr[j - 1][j - 1] + one_arr[j][k], one_arr[j - 1][j] + one_arr[j][k], one_arr[j - 1][j+1] + one_arr[j][k]);
            }
        }
        console.log(output_arr);
        return output_arr;


// [ [ 'd', 'e', 'f' ], [ 'j', 'k', 'l' ] ]

    }



};

// function mapper(digit) {
   
// }