/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let map = [["I",1],["IV",4],["V",5],["IX",9],["X",10],["XL",40],["L",50],["XC",90],["C",100],["CD",400],["D",500],["CM",900],["M",1000]]
    
    let res=""
    for(let i = map.length-1;i>=0;i--){
        res += map[i][0].repeat((num-num%map[i][1])/map[i][1]);
        num = num%map[i][1]
    }
    return res
};