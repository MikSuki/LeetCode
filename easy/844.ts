/**
    844. Backspace String Compare
 */

function backspaceCompare(s: string, t: string): boolean {
    const convert = (s: string) => {
        const stack: string[] = []
        for (const c of s) {
            if (c == '#') stack.pop()
            else stack.push(c)
        }
        return stack.join('')
    }
    return convert(s) == convert(t)
};