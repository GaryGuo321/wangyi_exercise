function escapeHTML(htmlStr) {
	var strArr = htmlStr.split('');
	var length = strArr.length;
	for (var i = 0; i < length; i++) {
		switch (strArr[i]) {
			case '<':
				strArr[i] = '&lt;';
				break;
			case '>':
				strArr[i] = '&gt;';
				break;
			case '&':
				strArr[i] = '&amp;';
				break;
			case '"':
				strArr[i] = '&quot;';
				break;
			default:
				break;
		}
	}
	return strArr.join('');
}
console.log(escapeHTML('<div>Tom&Jerry</div> '));
console.log(escapeHTML('<input type="text" name="mobile"> '));