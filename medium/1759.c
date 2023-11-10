/**
    # 1759. Count Number of Homogenous Substrings
*/

#define MOD 1000000007

int countHomogenous(char * s){
    int len = strlen(s);
    char ch = *s;
    long sum = 1;
    long res = 1;

    for(int i = 1; i < len; ++i){
        if(ch == s[i]){
            sum = (sum + 1) % MOD;
        }
        else{
            ch = s[i];
            sum = 1;
        }
        res = (res + sum) % MOD;
    }

    return res;
}
