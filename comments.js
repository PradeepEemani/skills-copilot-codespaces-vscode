//create a function that will tell if a given string is a palindrome or not
//a palindrome is a word that is the same forwards and backwards
function isPalindrome(str) {
    //your code here
    var revStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    if (revStr == str) {
        return true;
    }
    return false;
}