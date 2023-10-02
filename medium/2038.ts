/**
    2038. Remove Colored Pieces if Both Neighbors are the Same Color
 */
function winnerOfGame(colors: string): boolean {
    let A: number = 0, B: number = 0
    for (let i = 1; i < colors.length; ++i) {
        if (colors[i - 1] === colors[i] && colors[i] === colors[i + 1]){
            if(colors[i] === 'A') ++ A
            else ++B
        }
    }

    return A > B
};
