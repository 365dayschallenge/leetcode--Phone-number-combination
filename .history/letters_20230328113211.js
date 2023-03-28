
letterCombinations("23");
function letterCombinations(digits) {

    let output_arr = [];

    let length = digits.length;

    if (length == 0) {
        return output_arr;
    }
    else {
        let return [];
        let digit = digits.split('')
        for (let i = 0; i < length; i++){
            let one_arr = mapper(parseInt(digit[i]));
            strings.push(one_arr);

        }


console.log(strings);
      
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
            return []
    }
}