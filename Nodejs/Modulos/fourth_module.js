
//propiedades privadas 
var age = 12;
var status = 'single';



function sing(){
	console.log('tiri ri ri');
}

function  cry(){
	console.log('a bu bu bu');
}

function getArrested(){
	console.log('oh noes, I am in jail');
}


module.exports = {
	sing: sing,
	cry: cry,
	getArrested: getArrested,
	status: status
};