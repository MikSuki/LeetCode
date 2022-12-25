/**
 * 算數學式，用 stack
 * Time Complexity: O(n)
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operands = []
    tokens.forEach(e => {
        if(e === '+' || e === '-' || e === '*' || e === '/'){
            const r = parseInt(operands.pop()),
                l = parseInt(operands.pop());
            switch(e){
                case '+': operands.push(l + r); break;
                case '-': operands.push(l - r); break;
                case '*': operands.push(l * r); break;
                case '/': operands.push(~~(l / r)); break;
            }
        }
        else
            operands.push(e)
    })
    return operands.pop()
};