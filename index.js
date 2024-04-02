
  function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the string
    const reversedStr = alphanumericStr.split('').reverse().join('');
    
    // Check if the reversed string is equal to the original string
    return alphanumericStr === reversedStr;
}

/* 1. Define a function called isPalindrome which takes a string as input.
2. Convert the input string to lowercase to make the comparison case-insensitive.
3. Remove all non-alphanumeric characters from the string.
4. Create a reversed version of the string.
5. Check if the original string is equal to its reversed version.
6. If they are equal, return true (indicating that the string is a palindrome).
7. Otherwise, return false (indicating that the string is not a palindrome).
 */

/*
We define a function called isPalindrome that takes a string as input.
To ensure case-insensitivity, we convert the input string to lowercase using the toLowerCase() method.
We remove all non-alphanumeric characters from the string using a regular expression. This step ensures that we only consider letters and digits for the palindrome check.
Next, we create a reversed version of the string using either the split(), reverse(), and join() methods combination or by iterating through the string in reverse and appending each character to a new string.
We compare the original string with its reversed version using strict equality (===).
If the original string is equal to its reversed version, we return true, indicating that the string is a palindrome.
If the original string is not equal to its reversed version, we return false, indicating that the string is not a palindrome.*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
