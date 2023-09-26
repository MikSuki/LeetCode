function removeDuplicateLetters(s: string): string {
  const occ: number[] = new Array(26).fill(0)
  const code = (c: string) => c.charCodeAt(0) - 97
  const stack: string[] = []
  const visited: Set<string> = new Set()
  for (let i = 0; i < s.length; ++i)
    occ[code(s[i])] = i

  for (let i = 0; i < s.length; ++i) {
    let last = stack[stack.length - 1]
    if (visited.has(s[i]))
      continue
    while (stack.length && s[i] < last && occ[code(last)] > i) {
      visited.delete(stack.pop())
      last = stack[stack.length - 1]
    }
    stack.push(s[i])
    visited.add(s[i])
  }

  return stack.join('')
};
