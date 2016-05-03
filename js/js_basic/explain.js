function parseQuery(str) {
	var obj = {};
	// 分割字符串，以&
	var strArr = str.split('&');
	var strArrLength = strArr.length;
	console.log(strArr);
	// 遍历分割出来的数组
	for (var i = 0; i < strArrLength; i++) {
		// 如果元素为空，则删除
		if (!strArr[i]) {
			strArr.splice(i, 1);
			strArrLength -= 1;
			i -= 1;
			continue;
		}
		// 根据＝分割子字符串
		var strChildArr = strArr[i].split('=');
		// split对于没有捕获的结果组中使用了undefined，我们手动把他转成“”
		if (strChildArr[1] == undefined) {
			strChildArr[1] = '';
		}
		// 去掉字符前后的空格
		var trimStr = strChildArr[1].trim();
		// 把各个数据项加入到对象中
		obj[strChildArr[0]] = trimStr;
	}
	return obj;
}
var jerry = parseQuery("name= jerry  &age=1");
console.log(jerry);
var tom = parseQuery("name= tom &age=12&&gender&");
console.log(tom);