
letterCombinations("35");
function letterCombinations(digits) {

    let output_arr = [];

    let length = digits.length;

    if (length == 0) {
        return output_arr;
    }
    else {
        let digit = digits.split('')
        console.log(digit)
        for (let i = 0; i < digit.length; i++){
            let one_arr = mapper(parseInt(digit[i]));
            console.log(one_arr);
            for (let j = 0; j < one_arr.length; j++){
                let temp = one_arr[j];
                // console.log(temp);
                for (let k = 0; k < one_arr[0].length; k++){
                    if (j != k){
                        temp += one_arr[k];
                        output_arr.push(temp);
                    }
                }
                // console.log(one_arr);
            }
            return output_arr;

        }



      
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