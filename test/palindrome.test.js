const isPalindrome = require('../src/palindrome');

test ('should return false if not a string', () => {
    expect(isPalindrome()).toBe(false);
});

test('should return false if empty string', () => {
    expect(isPalindrome('')).toBe(false);
});

test('should return false if an integer', () => {
    expect(isPalindrome(5)).toBe(false);
});