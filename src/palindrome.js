function isPalindrome(str) {

    if(typeof str !== 'string') {
        return false;
    }

    
    if(!str.length){
        return false;
    }

    if (str.length === 1){
        return true;
    }
    
    let letters = str.split();
    const reverseLetters = letters.reverse().join();
    letters = letters.join();

    if(letters === reverseLetters){
        return true;
    }
}

module.exports = isPalindrome;