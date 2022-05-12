/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (array, key) => {
	// Write your code here
	const res = {};
	if (array != null && Array.isArray(array)) {
		array.forEach(obj => {
			res[obj[key]] = obj;
		});
		console.log(res);
		/** Or one other way of doing this */

		// let desiredObject = Object.assign({},...array.map(item => ({ [item[key]]: item}) ));
		// console.log(desiredObject);
		return res;
	}else{
		return null;
	}
};

convert([{ id: 1, value: 'abc' }, { id: 2, value: 'xyz' }, { id: 3, value: 'lmn' }], 'id');
/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
