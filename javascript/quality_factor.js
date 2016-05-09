/**
 * [binarySearch 二分查找]
 * @param  {[type]} value      [查找元素]
 * @param  {[type]} arr        [数组]
 * @param  {[type]} startIndex [开始索引]
 * @param  {[type]} endIndex   [结束索引]
 * @return {[type]}            [返回查找元素的索引]
 */
function binarySearch(value, arr, startIndex, endIndex) {
	if(!value|| !(arr instanceof Array)) return;

	var len        = arr.length,
		startIndex = typeof startIndex === "number" ? startIndex : 0,
		endIndex   = typeof endIndex   === "number" ? endIndex   : len-1,
		midIndex   = Math.floor((startIndex + endIndex) / 2),
		midval     = arr[midIndex];

	if(startIndex > endIndex) return startIndex;

	if(midval === value){
		return midIndex;
	}else if (midval > value) {
		return binarySearch(value, arr, startIndex, midIndex - 1);
	}else {
		return binarySearch(value, arr, midIndex + 1, endIndex);
	}
}

// 分解质因数，对于大数无能为力
// 可以使用BigInt.js来扩展大数计算能力
function decomposition(number, PrimesTable, rst) {
	var isFator = true;
	var sqrt = parseInt(Math.sqrt(number)) + 1;
	var index = binarySearch(sqrt, PrimesTable);
	for (var i = index; i >= 0; i--) {
		if (number % PrimesTable[i] === 0) {
			// 可以整除
			rst.push(PrimesTable[i]);
			number = number / PrimesTable[i];
			if (number >= 2) {
				decomposition(number, PrimesTable, rst);
			}
			isFator = false;
			break;
		}
	}
	if (isFator)
		rst.push(number);
	return rst
}

console.log(decomposition(122, PrimesTable, []));//[61, 2]