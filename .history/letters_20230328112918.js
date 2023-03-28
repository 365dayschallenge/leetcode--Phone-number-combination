
letterCombinations("23");
function letterCombinations(digits) {

    let output_arr = [];

    let length = digits.length;

    if (length == 0) {
        return output_arr;
    }
    else {
        let strings = [];
        let digit = digits.split('')
        for (let i = 0; i < length; i++){
            let one_arr = mapper(parseInt(digit[i]));
            strings.push(one_arr);

        }


console.log(strings);
      
    }



};

function mapper(digit) {
    let strings = [];
        switch (digit) {
            case digit == 2:
                strings = ["a", "b", "c"]
            case digit == 3:
                strings = ["d", "e", "f"]
            case digit == 4:
                strings = ["g", "h", "i"]
            case digit == 5:
                strings = ["j", "k", "l"]
            case digit == 6:
                strings = ["m", "n", "o"]
            case digit == 7:
                strings = ["p", "q", "r", "s"]
            case digit == 8:
                strings = ["t", "u", "v"]
            case digit == 9:
                strings = ["w", "x", "y", "z"]
            default:
                strings = []
        }
   
    console.log(strings);
    return strings;
}