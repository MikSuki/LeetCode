/**
    721. Accounts Merge
 */
function accountsMerge(accounts: string[][]): string[][] {
    const users: Map<string, string> = new Map() // email -> user
    const parent: Map<string, string> = new Map() // email -> root email
    const group: Map<string, string[]> = new Map() // root email -> all emails
    const res: string[][] = []

    accounts.forEach(account => {
        for (let i = 1; i < account.length; ++i) {
            users.set(account[i], account[0])
            parent.set(account[i], account[i])
        }
    })

    accounts.forEach(account => {
        for (let i = 2; i < account.length; ++i) {
            if (findParent(account[i]) != findParent(account[i - 1]))
                Union(account[i], account[i - 1])
        }
    })

    for (let [x, root] of parent) {
        root = findParent(x)
        if (!group.has(root))
            group.set(root, [])
        group.get(root).push(x)
    }


    for (const [parent, arr] of group) {
        arr.sort()
        res.push([users.get(parent)].concat(arr))
    }

    return res

    function findParent(x: string): string {
        if (x != parent.get(x))
            parent.set(x, findParent(parent.get(x)))
        return parent.get(x)
    }

    function Union(x: string, y: string) {
        x = parent.get(x)
        y = parent.get(y)
        if (x < y)
            parent.set(y, x)
        else
            parent.set(x, y)
    }
};