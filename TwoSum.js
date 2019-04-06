
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

//End of Brute Force way


//HASH TABLE 
//TIME COMPLEXITY:O(1)
var twoSum = function(nums, target) {
    
    //create a plain object
    var HashTable = {};
    
    //iterate through the elements of array nums
    for(let i =0;i < nums.length;i++){

        /**
         * 
         * when i = 0
         * complement = 9 -2= 7
         */
        const complement = target - nums[i];
   
          /**
           * if('key' in a){
           *  return indexes 
           * }
           *
           */

        if(complement in HashTable){
            return [nums.indexOf(complement), i];
        }
        /**
         * 
         * 
         * var HashTable = {};
         * HashTable["key1"] = "value1"
         * HashTable["key2"] = "Value2"
         * ...
         * What is happening:
         * HashTable[key: 9-7 ='2'] = value: '0'
         * 
         */ 
        HashTable[target - complement]=i;
        console.log(HashTable)
    }
};


nums = [2,7,11,15,9];
target = 9;

twoSum(nums, target);


//created by Hector Ramirez
//LeetCode practice. 


