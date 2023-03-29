
letterCombinations("234");
function letterCombinations(digits) {
    if (digits.length === 0) return [];
    const map = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };
    const result = [];
    const dfs = (index, str) => {
        if (index === digits.length) {
            result.push(str);
            return;
        }
        const letters = map[digits[index]];
        for (let i = 0; i < letters.length; i++) {
            dfs(index + 1, str + letters[i]);
        }
    }
    dfs(0, '');
    console.log(result);
    return result;



};

