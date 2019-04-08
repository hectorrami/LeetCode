/**
 * Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

 * NOTE: This solution is faster than 100% of javascript submissions
 */



var isHappy = function(n) {
    
    //create a new set in order to keep track of 
    //what numbers have been seen before
    let mapping = new Set();

    while(n != 1){
        
        //if(n is not in the set)
        //{
        //     put it in the set
        // }
        if(!mapping.has(n)){
          mapping.add(n)
          //console.log(mapping)
            /**
             * 
             * 
             * Set { 19 }
               Set { 19, 82 }
               Set { 19, 82, 68 }
               Set { 19, 82, 68, 100 }
              */
            
        }
        else 

        //if the number is already on the set
        //then it should return false because
        //at this point it would just keep repeating
        //so this is a good indicator to terminate the 
        //process
        return false;

        //create a sum variable outside 
        //of the while loop and set it to zero
        let sum = 0;
        while(n != 0){
            
            /*
                This while loop is very important: it is reponsible for the major calculations 
                
                Here is how it works:
                -start by setting the sum = 0 before the loop
                -take the mod of n and take that to the power of 2 
                -then set n = n/10, remember to use the floor function to round it down
                -At this point if n is still not 0 keep looping and taking the sum
                -Once this process is over set n = sum
              */
            
            sum += Math.pow(n%10,2);
            n = Math.floor(n/10)
        }
  
        n = sum

        //NOTE: once the sum == 0 we return true
    }
    
    return true;
};




isHappy(19) //prints out true
