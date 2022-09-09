// Write your code below
const isPalindrome = (str) => {
    const strArr = str.split('');
    for (let i = 0; i < (strArr.length / 2); i++) {
        if (strArr[i] !== strArr[strArr.length - (i + 1)]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('a'));
console.log(isPalindrome('noon'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('Racecar'));
console.log(isPalindrome('asdfjdsa'));