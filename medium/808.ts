/**
    題目:
        808. Soup Servings

    描述:
        給A.B兩種湯，分別都有n ml
        能使用4種操作，每個操作機率都一樣
        求A先被舀完的機率(同時被舀完的化為0.5)

    方法:
        dfs
        分四種操作去處理

        ※ 而這題的重點是n最大道10^9
        但其實舀湯的量是不一致的
        A平均舀(100+75+50+25)/4 = 62.5
        B則是(0+25+50+75)/4 = 37.5
        所以當n來到很大時，A一定先被舀完

    時間:   
        O(n^2)

 */

function soupServings(n: number): number {
    if (n > 5000) return 1
    const map: Map<string, number> = new Map()
    return dfs(n, n)

    function dfs(A: number, B: number): number {
        if (map.has(A + '_' + B)) return map.get(A + '_' + B)
        if (A <= 0) {
            if (B <= 0) return 0.5
            return 1
        }
        if (B <= 0 && A > 0) return 0

        const prob = (dfs(A - 100, B) + dfs(A - 75, B - 25) + dfs(A - 50, B - 50) + dfs(A - 25, B - 75)) / 4

        map.set(A + '_' + B, prob)

        return map.get(A + '_' + B)
    }
};
