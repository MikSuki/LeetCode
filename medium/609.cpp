class Solution {
public:
    vector<vector<string>> findDuplicate(vector<string>& paths) {
        unordered_map<string, vector<string>> um;
        vector<vector<string>> v;   
        for(auto path: paths){
            stringstream ss(path);
            string root, s;
            getline(ss, root, ' ');
            while(getline(ss, s, ' ')){
                string fn = root + '/' + s.substr(0, s.find('(')),
                    cont = s.substr(s.find('(') + 1, s.find(')') - s.find('(') - 1);
                    um[cont].push_back(fn);
            }
        }
        for(auto e: um){
            if(e.second.size() > 1)
                v.push_back(e.second);
        }
        return v;
    }
};