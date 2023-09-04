/**
    2483. Minimum Penalty for a Shop
 */
function bestClosingTime(customers: string): number {
    let p = customers.split('').reduce((acc, char) => acc += char == 'Y' ? 1 : 0, 0)
    let min = p
    let day = 0

    for (let i = 0; i < customers.length; ++i) {
        if (customers[i] == 'Y')
            --p
        else
            ++p
        if (p < min) {
            min = p
            day = i + 1
        }
    }

    return day
};