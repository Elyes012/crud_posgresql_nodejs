const db = require('../config/db.config.js');
const Customer = db.users;
const bcrypt = require('bcrypt')
const BCRYPT_SALT_ROUNDS = 12;
// Post a Customer
exports.create = (req, res) => {

	// -> Check Email is already in use
	Customer.findOne({
		where: {
			email: req.body.email
		}
	}).then(emailUser => {
		if (!emailUser) {

			// Save to PostgreSQL database + crypt password
			req.body.password = bcrypt.hashSync(req.body.password, BCRYPT_SALT_ROUNDS);
			Customer.create(req.body).then(data => {

				// Send created customer to client
				res.json(data);

			}).catch(err => {
				console.log(err);
				res.status(500).json({
					msg: "error",
					details: err
				});
			});

		} else {
			res.status(400).send(" Email is already in use!");
			return;
		}
	}).catch(err => {
		console.log(err);
		res.status(500).json({
			msg: "error",
			details: err
		});
	});

};

// Find All Customers
exports.findAll = (req, res) => {
	Customer.findAll().then(customers => {
		// Send All Customers to Client
		res.json(customers);
	}).catch(err => {
		console.log(err);
		res.status(500).json({
			msg: "error",
			details: err
		});
	});
};

// Find a Customer by Id
exports.findById = (req, res) => {
	Customer.findById(req.params.id).then(customer => {
		res.json(customer);
	}).catch(err => {
		console.log(err);
		res.status(500).json({
			msg: "error",
			details: err
		});
	});
};

// Update a Customer BY ID
exports.update = (req, res) => {
	const id = req.body.id;
	Customer.update(req.body, {
		where: {
			id: id
		}
	}).then(() => {
		res.status(200).json({
			mgs: "Updated Successfully -> Customer Id = " + id
		});
	}).catch(err => {
		console.log(err);
		res.status(500).json({
			msg: "error",
			details: err
		});
	});
};

// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	Customer.destroy({
		where: {
			id: id
		}
	}).then(() => {
		res.status(200).json({
			msg: 'Deleted Successfully -> Customer Id = ' + id
		});
	}).catch(err => {
		console.log(err);
		res.status(500).json({
			msg: "error",
			details: err
		});
	});
};