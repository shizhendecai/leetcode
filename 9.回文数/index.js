/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xs = x+''
    let i =0
    let res = false
    let len = xs.length
    while(i<len/2){
        if(xs[i] == xs[len-1-i]){
            res = true
            i++
        }else{
            res =false
            break
        }
    }

    return res
};

console.log(isPalindrome(-121))