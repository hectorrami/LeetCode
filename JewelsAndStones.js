
/* PROBLEM:
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.

*/

//MY SOLUTION
var numJewelsInStones = function(J, S) {
    
    //create a mapping to keep all the char of J
    let myhash = new Map();
    
    let counter =0;
    
    //Let's insert the characters of J 
    //in our Mapping
    for(let i =0; i < J.length; i++){
        myhash.set(J.charAt(i),i);
    }
    /*
    Map.prototype.has(key)
    Returns a boolean asserting whether a value has been associated to the key in the Map object or not.
    THIS FUNCTION IS KEY (NO PUN INTENDED) TO SOLVING THIS PROBLEM.
    Basically checks to see if a value has been associated with a certain KEy in the Map object.
    */
    //Let's search for those character
      for(let i =0; i < S.length; i++){
          //if the char is in the mapping
          //increase the counter
          if(myhash.has(S.charAt(i))){
              counter++
          }
    }
    
    return counter
};

/* OTHER IMPORTANT METHODS FOR STRINGS IN JAVASCRIPT
Method	Description
charAt()	Returns the character at the specified index (position)
charCodeAt()	Returns the Unicode of the character at the specified index
concat()	Joins two or more strings, and returns a new joined strings
endsWith()	Checks whether a string ends with specified string/characters
fromCharCode()	Converts Unicode values to characters
includes()	Checks whether a string contains the specified string/characters
indexOf()	Returns the position of the first found occurrence of a specified value in a string
lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
localeCompare()	Compares two strings in the current locale
match()	Searches a string for a match against a regular expression, and returns the matches
repeat()	Returns a new string with a specified number of copies of an existing string
replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
search()	Searches a string for a specified value, or regular expression, and returns the position of the match
slice()	Extracts a part of a string and returns a new string
split()	Splits a string into an array of substrings
startsWith()	Checks whether a string begins with specified characters
substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
substring()	Extracts the characters from a string, between two specified indices
toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
toLowerCase()	Converts a string to lowercase letters
toString()	Returns the value of a String object
toUpperCase()	Converts a string to uppercase letters
trim()	Removes whitespace from both ends of a string
valueOf()	Returns the primitive value of a String object
  

*/
