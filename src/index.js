module.exports = function longestConsecutiveLength(array) {

	var newArray = array.sort(function(a, b) {return a-b});
	var count  = 0;
	var itog = 0;
	var leng = newArray.length;

	if (leng == 0) {

		return 0;

	} else if (leng == 1){

		return 1;

	} else {

		for (var i = 0; i < leng; i++) {
			count = count + 1;

			if(itog<count){
				itog = count;
			}

			if(newArray[i] == (newArray[i+1])){
				count = count - 1;
			} else if (newArray[i] != (newArray[i+1] -1 )){
				count = 0;
			}
			
		}

		return itog;
	}
}