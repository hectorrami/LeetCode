/*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]

*/

class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
     vector<int> result(2);
        map<int, int> m;
        for (int i = 0; i < numbers.size(); ++i) {
            m.insert(pair<int, int> (numbers[i], i + 1));
        }
        for (int i = 0; i < numbers.size(); ++i) {
            int compliment = target - numbers[i];
            map<int, int>::iterator answer = m.find(compliment);
            if (answer != m.end() && m.at(compliment) != m.at(i+1)) {
                result[0] = i + 1;
                result[1] = m.at(compliment);
                return result;
            }
        }
        return result;
    } 
};
