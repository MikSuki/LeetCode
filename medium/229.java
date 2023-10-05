/**
    # 229. Majority Element II

    # 題目
        給一個Array<Integer>，找出出現超過 n/3 的元素

    # 方法
        Boyer–Moore majority vote algorithm
        1. cand1和cand2為array中出現前兩多次的元素
        用cnt1和cnt2來記錄cand1和cand2的出現次數
        2. loop nums
            當nums[i] == (cand1 or cand2)，對應的cnt += 1
            否則都減掉1，只要cnt == 0，就將對應的cnt換成新的nums[i]，所以出現前兩多次的會被保留到最後
        3. 最後，再看看cand1和cand2有沒有出現(n/3)即可
    
    # 時間
        Time: O(n)
        Space: O(1)

 */
class Solution {
    public List<Integer> majorityElement(int[] nums) {
        int cand1 = 1000000001, cand2 = cand1;
        int cnt1 = 0, cnt2 = 0;

        for(int i = 0; i < nums.length; ++i){
            if(nums[i] == cand1)
                ++cnt1;
            else if (nums[i] == cand2)
                ++cnt2;
            else if(cnt1 == 0) {
                cand1 = nums[i];
                cnt1 = 1;
            }
            else if(cnt2 == 0) {
                cand2 = nums[i];
                cnt2 = 1;
            }
            else{
                --cnt1;
                --cnt2;
            }
        }

        cnt1 = 0;
        cnt2 = 0;
        for(int i = 0; i < nums.length; ++i){
            if(nums[i] == cand1) ++cnt1;
            else if(nums[i] == cand2) ++cnt2;
        }

        ArrayList<Integer> res = new ArrayList();
        if(cnt1 > nums.length / 3) res.add(cand1);
        if(cnt2 > nums.length / 3) res.add(cand2);

        return res;
    }
}
