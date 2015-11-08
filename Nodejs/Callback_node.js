
//Callback style node

artist.findEvents({name: artist}, function(err,events){
	if(err){
		return console.log("We have a problem, %s", err);
	}
	console.log(events);
});