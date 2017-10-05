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

test('should return true if a character', () => {
    expect(isPalindrome('a')).toBe(true);
});

test('should return true if eye is entered', () => {
    expect(isPalindrome('eye')).toBe(true);
});