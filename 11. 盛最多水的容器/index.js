/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i=0,j=height.length-1;
    let max =0;
    while(j>i){
        let h = Math.min(height[i],height[j])
        max = Math.max(max,(j-i)*h);
        if(h == height[i]){
            i++
        }else{
            j--
        }
    }
    return max
};