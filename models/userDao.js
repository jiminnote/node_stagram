const { myDataSource } = require('../config/mysql');

const createUser = async (name, email, nickname, encryptedPassword) => {
	try {
		return await myDataSource.query(
		`INSERT INTO users(
			name,
			email,
			nickname,
			password
		) VALUES ("${name}", "${email}", "${nickname}", "${encryptedPassword}"); 
		`
	  );} 
	  	catch (err) {
		const error = new Error('INVALID_DATA_INPUT');
		error.statusCode = 500;
		throw error;
	}
};

const getUserByEmail = async (email) => {
    const [user] = await myDataSource.query(
      `
        SELECT *
        FROM users 
        WHERE email = ?
      `,
      [email]
    );
  
    return user;
  };

module.exports = {
    createUser,
    getUserByEmail

};
