/**编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res= strs[0]
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let len = res.length<=str.length?str.length:res.length
        let j =0;
        let temp = ""
        while(j<len){
            if(res[j] == str[j]){
                temp += str[j]
                j++
            }else{
                res = temp
                break
            }
        }
    }
    return res==undefined?"":res
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["aa","a"]))