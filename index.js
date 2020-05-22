
const merge = (x, av, al) => {
    const arr = [];
     if (al.includes(`any`)) {
        return av;
    }
    x.concat(av, al).sort().forEach(item => {
        if(av.indexOf(item) !== -1 && al.indexOf(item) !== -1) {
            if (arr.indexOf(item) == -1) arr.push(item)
        }
    });
    return arr;
}
  
const attempt = (val1, val2, val3) => {
    const arr = []
    let nearBiggestNums = null;
    let nearSmallestNums = null;
    const mergedArr = merge([], val1, val2);
    if (mergedArr.length === 0) return mergedArr;
    if (val3.includes(`any`)) {
        return mergedArr;
    }
    val3.sort().forEach(item => {
        let index = mergedArr.indexOf(item);
        if (index >= 0) {
            arr.push(item)
            mergedArr.splice(index, 1);
        } else {
            if (nearBiggestNums === null) {
                nearBiggestNums = mergedArr.filter(item2 => item <= item2);
                nearBiggestNums.length && arr.push(Math.min(...nearBiggestNums)) && mergedArr.splice(index, 1);
            }
            if (nearSmallestNums === null) {
                nearSmallestNums = mergedArr.filter(item2 => item >= item2);
                nearSmallestNums.length && arr.push(Math.max(...nearSmallestNums)) && mergedArr.splice(index, 1);
            }
        }
    });
    return arr;
};
// attempt(a, b, c)
module.exports = {
    attempt
}