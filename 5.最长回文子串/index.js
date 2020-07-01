/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length == 1 || s.length ==0) {return s}
    let res = ""
    for(let i=0;i<s.length;i++){
        for(let j=s.length-1;j>i;j--){
            let temp = s.substring(i,j+1)
            if(isPalindrome(temp)){
                res = res.length>=temp.length?res:temp
                if(res.length === s.length){
                    return s
                }
            }
        }
    }
    return res.length ==0?s[0]:res
};

var isPalindrome = function(str){
    if(str.length == 1){
        return true
    }else{
        let i = 0,j = str.length-1
        while(j>i){
            if(str[i] === str[j]){
                i++
                j--
            }else{
                return false
            }
        }
        return true
    }
}
console.log(longestPalindrome("babad"))

//test
/**
 * s=""
 * s="z*1000"
 * s="aa"
 * res=""
 */