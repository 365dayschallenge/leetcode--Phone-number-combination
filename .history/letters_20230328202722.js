
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
                    one_arr.push("a", "b", "c")
                case 3:
                    one_arr.push("d", "e", "f")
                case 4:
                    one_arr.push("g", "h", "i")
                case 5:
                    one_arr.push("j", "k", "l")
                case 6:
                    one_arr.push("m", "n", "o")

                case 7:
                    one_arr.push("p", "q", "r", "s")
                case 8:
                    one_arr.push("t", "u", "v")
                case 9:
                    one_arr.push("w", "x", "y", "z")
                default:
                    return
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

