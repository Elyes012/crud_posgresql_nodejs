module.exports = (sequelize, Sequelize) => {
	// ClientLivriTn --> table in database
	const Customer = sequelize.define('ClientLivriTn', {
		id: { 
			type: Sequelize.INTEGER, 
			primaryKey: true, 
			autoIncrement: true 
		},
	  nom: {
			type: Sequelize.STRING
	  },
	  prenom: {
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING,
	  },
	  motPasse: {
		  type: Sequelize.STRING
	  },
	  statut: {
		type: Sequelize.STRING
	}
	});
	
	return Customer;
}