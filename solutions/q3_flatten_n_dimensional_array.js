/* Write a Program to Flatten a given n-dimensional array */

const flatten = (input_array) => {
	if(input_array!=null && Array.isArray(input_array)){
		let result = [];
		for(let index=0; index<input_array.length; index++){
			const currentValue = input_array[index];
			if(Array.isArray(currentValue)){
				result = result.concat(flatten(currentValue));
			}else{
				if(currentValue != null){
					result.push(currentValue); // result = [1]+
				}
			}
		}
		console.log(result);
		return result;		
	}else{
		return null;
	}
};

flatten([1, [2, 3], [[4], [5]]]);

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])	
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
