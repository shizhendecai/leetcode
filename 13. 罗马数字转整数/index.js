/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let res = 0;
    let M = {"I":1,"IV":4,"V":5,"IX":9,"X":10,"XL":40,"L":50,"XC":90,"C":100,"CD":400,"D":500,"CM":900,"M":1000};
    for(let i=0;i<=s.length-1;i++){
        if(M[s[i]+s[i+1]] != undefined){
            res += M[s[i]+s[i+1]]
            i++
        }else{
            res += M[s[i]]
        }
    }

    return res
};