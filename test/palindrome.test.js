const isPalindrome = require('../src/palindrome');

test ('should return false if not a string', () => {
    expect(isPalindrome()).toBe(false);
});