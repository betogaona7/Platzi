
//Reutilizamos el modulo second_module

var alberto = require('./second_module');
var new_person = require('./fourth_module');

module.exports = {
	alberto : alberto,
	juan:{
		name: 'Juan Gonzales',
		songs: [
			'Hips don\'t lie'
		],
		events: [
			'United states',
			'UK'
		]
	},
	new_person: new_person
};