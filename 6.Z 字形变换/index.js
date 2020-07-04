/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
/**16 4*
 * m行
 * n列 i/(2m-2) <m  n+=0
 *     i/(2m-2) >=m n+=1
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 * 
 * 
 * L E E T
 *     C
 *   O
 * D E I S
 *     H
 *   I
 * R I N G
 */
// 2n - 2 
//LEETCODEISHIRING 4
var convert = function(s, numRows) {
    
    let arr = [];
    if(numRows == 1) {return s}
    if(numRows == 2){
        let res = ""
        for(let i=0;i<s.length;i++){

            if(i%2 ==0){
                res += s[i]
            }
        }
        for(let i=0;i<s.length;i++){
            if(i%2 !=0){
                res += s[i]
            }
        }
        
        return res
    }
    let rowI = 0
    let colI = 0
    let aLoop = 2*numRows -2
    for(let k=0;k<s.length;k++){
        
        if(k % aLoop <= (numRows-1)){
            if(arr[rowI] == undefined){
                arr[rowI] = new Array(numRows)
            }
            arr[rowI][colI] = s[k]
            colI ++
            colI = colI==numRows?numRows-1:colI
        }else if(k%aLoop >(numRows-1) && k%aLoop <aLoop-1){
            colI --
            rowI ++
            if(arr[rowI] == undefined){
                arr[rowI] = new Array(numRows)
            }

            arr[rowI][colI] = s[k]
        }else if(k%aLoop  == aLoop-1){
            colI --
            rowI ++
            if(arr[rowI] == undefined){
                arr[rowI] = new Array(numRows)
            }

            arr[rowI][colI] = s[k]
            colI --
            rowI ++
        }
    }

    let res = ""
    for(let i=0;i < numRows;i++){
        for(let j=0;j<arr.length;j++){
            res += arr[j][i] == null ? '':arr[j][i]
        }
    }
    arr = null
    return res
};

console.log(convert("enrxihcsanbtgxdcttnujvfscrwqtyuynmxwvbqxorquowzhpmdzjlrlcncyoywbmvzhxpenhvivthfivkhfxbqaquyetwifthnsxrggoqbhxiqsvzzscqutmszfqjnmtaeqtmykcbrzkjuhltznluiyokfhvstouzgqmeaogrqsdmzohydtuotjyysttlknmqdyvdpbxftatuqastvphoahpsdifnxrfbqaghdfoyhhsxhntdcctcmiupqzeqsjrkmzrphfoooioyvjdxnwbzhvqzwuprgibsitjpazfritpfesfsqgrxekxcgmtmvvgfqqwspdjxzaddukvlqpkuzjzhwsutpcafsyaibjhammegwbtpqelrnkbldxguzgcseccinlizyogwqzlifxcthdgmanjztltanviajschhkdxlrfrohmxmsmmhvodihdvfnxofbxmlclxvrojacjpwxbeurhcbmzgzwwgyvtlzeivxygaappzosdikkmlwltxirdioytnfeieepehgvgvqjfavsntfiqnbvxputczznfdcmkkhshxdnzyhormwjcxfbobwrcvehbitnsdgacjpeiysbmrnoqssfvoyxkeglmaygfgihqznazgdmzqcpiuudjucvyjimlivqpdzhfnhevksudvjlrgrcavxzehlrqgjhmjqtyzztjsnopyagetjfqiexqroiayrojhjhgiarcpgrniysdhztpfqhwhpyfioopxxvgxniovabdatgjszazsiwzzweiluxirvqqkzefbhiddqmxrmxjwtiwrogckdldadtkczpfhzikpujhjgqfbbbt",373))