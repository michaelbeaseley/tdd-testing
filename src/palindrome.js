function isPalindrome(str) {

    if(typeof str !== 'string') {
        return false;
    }

    str = str.trim();
    if(!str.length){
        return false;
    }

    if (str.length == 1){
        return true;
    }
    
    const letters = str.split();
    const reverseLetters = letters.reverse();
    if(letters == reverseLetters){
        return true;
    }
}

module.exports = isPalindrome;