/**
    問題： 
        給兩個sorted sequences，找兩者之間中位數
        並要求在O(log(m+n))完成

    方法: 
        divide-and-conquer   
        讓A的長度總是比較小
        去比較A和B的中位數

        AAA Am AAAA
        BBB Bm BBBBBB

            1. A.median < B.median: 丟掉A[ai..median]
            2. A.median > B.median: 丟掉B[bi..median]
        再繼續recursice

    時間: O(log(m+n))

 */

    function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        const m = nums1.length, n = nums2.length
    
        if ((m + n) % 2) return findKth(nums1, 0, m, nums2, 0, n, (m+n+1) >> 1)
        return (findKth(nums1, 0, m, nums2, 0, n, (m+n)>>1) + findKth(nums1, 0, m, nums2, 0, n, ((m+n)>>1)+1)) / 2
    
        function findKth(A: number[], ai: number, an: number, B: number[], bi: number, bn: number, k: number): number {
            if(an > bn) return findKth(B, bi, bn, A, ai, an, k)
            if(an == 0) return B[bi + k - 1]
            if(k == 1) return Math.min(A[ai], B[bi])
    
            const ka: number = Math.min(m, k >> 1)
            const kb: number = k - ka
            if(A[ai+ka-1] < B[bi+kb-1])
                return findKth(A, ai + ka, an - ka, B, bi, bn, k - ka)
            return findKth(A, ai, an, B, bi + kb, bn - kb, k - kb)
        }
    };
    
    