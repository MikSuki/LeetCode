/**
    題目:
        852. Peak Index in a Mountain Array

    描述:
        給一個前面遞增、後面遞減的mountain陣列
        找到極值，也就是前面後面全都比他小
        要求O(logn)完成

    方法:   
        binary search
        
        arr[i-1]  arr[i]  arr[i+1]
        1. < > : ans
        2. < < : bs(i + 1, r)
        3. > > : bs(l, i - 1)
        4. > < : impossible

 */
function peakIndexInMountainArray(arr: number[]): number {
    let l = 0, r = arr.length - 1

    while (l < r) {
        const m: number = (l + r) >> 1
        if (arr[m] > arr[m - 1]) {
            if (arr[m] > arr[m + 1])
                return m
            else
                l = m
        }
        else
            r = m
        // console.log(l, m, r)
    }

    return l
};