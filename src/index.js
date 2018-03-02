module.exports = function getZerosCount(number) {
  // your implementation
    var five = 5;
    var result = 0; 
	while(number > five){
		result = result + Math.floor(number / five);
		five *= 5;
	}
	return result;
}

