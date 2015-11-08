
//las promeras se pueden encadenar 

artist.find('alberto')
	.findEvents({city: 'Saltillo'})
	.findTickets({price: {$lt: 100}})
	.purchse({cc:424242424234234})
	.then(function(transaction){
		customer.transaction = transaction;
		return customer.save();
	})
	.then(function(customer, transaction){
		return emal.confirm(customer, transaction);
	})
	.then(function(){
		res.send({
			tickets: 'purchased'
		});
	}), function(err){
		console.log('Sorry, we have a problem, try later', err);
	});