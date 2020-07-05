/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x>=0){
            
        let xs = x+''
        let xa = xs.split('')
        for(let i=0,len=xa.length;i<(len/2);i++){
            let temp = xs[i]
            xa[i] = xa[len-1-i]
            xa[len-1-i] = temp
        }
        xs = xa.join('')
        return Number(xs)>4294967295||Number(xs)<-4294967296?0:Number(xs)
    }else{
        let xs = x+''
        let singnal = "-"
        xs = xs.substring(1)
        
        let xa = xs.split('')
        for(let i=0,len=xa.length;i<(len/2);i++){
            let temp = xa[i]
            xa[i] = xa[len-1-i]
            xa[len-1-i] = temp
        }
        xs = singnal + xa.join('')
        return Number(xs)>4294967295||Number(xs)<-4294967296?0:Number(xs)
    }

};

console.log(reverse(-152))