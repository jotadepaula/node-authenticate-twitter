// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'twitterAuth' : {
		'consumerKey' 		: 'consumer-key',
		'consumerSecret' 	: 'consumer-secret',
		'callbackURL' 		: 'http://localhost:3030/auth/twitter/callback'
	}

};
