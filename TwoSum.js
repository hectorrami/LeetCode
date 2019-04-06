
/*
* BRUTE FORCE APPROACH: NOT THE MOST OPTIMAL 
* This implementation was by far the easiest to implement. 
* We loop through each element and look for the complement 
* In other words, we loop through elements x looking for 
* target - x (complement) 
*
*  TIME COMPLEXITY: We have two nested for-loops resulting in 
*  a time complexity of O(n^2)
*/

var twoSum = function(nums, target) {
    
    //create an array
    result = [];
    
    //nested forloops to find the complement 
    for(let i =0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                //if complement is foud
                //push indeces into 'result' array
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
};

//created by Hector Ramirez
//LeetCode practice. 
