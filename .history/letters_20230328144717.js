
letterCombinations("35");
function letterCombinations(digits) {

    let output_arr = [];

    let length = digits.length;

    if (length == 0) {
        return output_arr;
    }
    else {
        let digit = digits.split('')
        let one_arr = [];
        for (let i = 0; i < digit.length; i++) {
            one_arr.push(mapper(parseInt(digit[i])));
        }
        for (let j = 0; j < one_arr.length; j++) {
            for (let k = 0; k < one_arr[0].length; k++) {
                let temp = one_arr[j][k] + one_arr[j][k];
                console.log("here" + temp);
            }
        }
        console.log(one_arr[1][2]);
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