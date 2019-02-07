module.exports = (sequelize, Sequelize) => {
	// userr --> table in database
	const Customer = sequelize.define('userr', {
		id: { 
			type: Sequelize.INTEGER, 
			primaryKey: true, 
			autoIncrement: true 
		},
	  firstname: {
			type: Sequelize.STRING
	  },
	  lastname: {
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING,
	  },
	  password: {
		  type: Sequelize.STRING
	  }
	});
	
	return Customer;
}