var UserManagement = require('user-management');

var USERNAME = 'foo';
var PASSWORD = 'bar';
var EXTRAS = {
	name: 'Finnius F. Bar'
};

var users = new UserManagement();

users.load(function (err) {
	console.log('Checking if the user exists');

	users.userExists(USERNAME, function (err, exists) {
		if (exists) {
			console.log('User already exists');
			users.close();
		} else {
			console.log('User does not exist');
			console.log('Creating the user');

			users.createUser(USERNAME, PASSWORD, EXTRAS, function (err) {
				console.log('User created');
				users.close();
			});
		}
	});
});