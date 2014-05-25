// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'twitterAuth' : {
		'consumerKey' 		: 'consume-key-twitter',
		'consumerSecret' 	: 'consumer-Secret-twitter',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	}

};