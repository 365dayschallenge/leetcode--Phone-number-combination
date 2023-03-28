
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
            one_arr.push(mapper(parseInt(digit[i])));
        }
        console.log(one_arr);
        for (let j = 0; j < one_arr.length; j++) {
            for (let k = 0; k < one_arr[j].length; k++) {
                output_arr.push(one_arr[j][j] + one_arr[j][k], one_arr[j][j+1] + one_arr[j][k]);
            }
        }
        console.log(output_arr);
        return output_arr;


// [ [ 'd', 'e', 'f' ], [ 'j', 'k', 'l' ] ]

    }



};

function mapper(digit) {
    switch (digit) {
        case 2:
            return ["a", "b", "c"]
        case 3:
            return ["d", "e", "f"]
        case 4:
            return ["g", "h", "i"]
        case 5:
            return ["j", "k", "l"]
        case 6:
            return ["m", "n", "o"]
        case 7:
            return ["p", "q", "r", "s"]
        case 8:
            return ["t", "u", "v"]
        case 9:
            return ["w", "x", "y", "z"]
        default:
            return
    }
}