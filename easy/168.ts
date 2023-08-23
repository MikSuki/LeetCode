/**
    168. Excel Sheet Column Title
 */
function convertToTitle(columnNumber: number): string {
    let res: string[] = []
    while (columnNumber > 0) {
        --columnNumber
        res.push(String.fromCharCode(columnNumber % 26 + 65))
        columnNumber = ~~((columnNumber - (columnNumber % 26)) / 26)
        console.log(columnNumber)
    }
    return res.reverse().join('')
};