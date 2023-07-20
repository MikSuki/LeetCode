/**
    題目:
        735. Asteroid Collision

    問題:   
        給一堆行星的大小，sign表示方向
        同方向的行星不會相遇
        而反方向的會撞擊，留下比較大的(相等則都消失)

        找出最後結果

    方法:
        用stack存
        當stack元素為正，asteroids[i]負的才會相遇，留下較大的
        否則放入stack

    時間:
        O(n)
 */

function asteroidCollision(asteroids: number[]): number[] {
    const stack: number[] = [asteroids[0]]
    const last = (arr: number[]) => arr[arr.length - 1]

    for (let i = 1; i < asteroids.length; ++i) {
        let f: boolean = true
        while (stack.length && (last(stack) > 0 && asteroids[i] < 0)) {
            if (Math.abs(last(stack)) < Math.abs(asteroids[i])) {
                stack.pop()
                continue
            }
            else if (Math.abs(last(stack)) == Math.abs(asteroids[i]))
                stack.pop()
            f = false
            break
        }

        if (f) stack.push(asteroids[i])
    }

    return stack
};