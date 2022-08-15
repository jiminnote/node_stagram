const { myDataSource } = require('../config/mysql');

const signup = async (name, email, nickname, password) => {
	try {
		return await myDataSource.query(
		`INSERT INTO users(
			name,
			email,
			nickname,
			password
		) VALUES (?, ?, ?, ?); 
		`,
		[name, email, nickname, password]
	  );} 
	  	catch (err) {
        console.log(err)
		const error = new Error('INVALID_DATA_INPUT');
		error.statusCode = 500;
		throw error;
	}
};

module.exports = {
    signup
};
