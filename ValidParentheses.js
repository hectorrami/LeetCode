/* Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true */



var isValid = function(s) {
    
    //create a mapping to hold the pais of parentheses
    var mapping = {
        ")":"(",
        "]":"[",
        "}":"{"
    }

    var stack = [];
    
    for(i =0 ; i < s.length; i++){
        let element = s[i];
        if(element == "(" || element == "[" || element == "{")
            stack.push(element)
        else if(mapping[element] == stack[stack.length-1])
            stack.pop();
        else 
            return false;
    }
    
    if (stack.length === 0) 
        return true;
    else 
        return false;
};
