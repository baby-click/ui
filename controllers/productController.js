var model = require('../models/productModel.js');

/**
 * productController.js
 *
 * @description :: Server-side logic for managing products.
 */
module.exports = {
	/**
	 * productController.list()
	 */
	list: function (req, res) {
		model.find(function (err, products) {
			if (err) {
				return res.json(500, {
					message: 'Error getting product.'
				});
			}
			return res.json(products);
		});
	},

	/**
	 * productController.show()
	 */
	show: function (req, res) {
		var id = req.params.id;
		model.findOne({
			_id: id
		}, function (err, product) {
			if (err) {
				return res.json(500, {
					message: 'Error getting product.'
				});
			}
			if (!product) {
				return res.json(404, {
					message: 'No such product'
				});
			}
			return res.json(product);
		});
	},

	/**
	 * productController.create()
	 */
	create: function (req, res) {
		var product = new model({
			title: req.body.title,
			description: req.body.description,
			price: req.body.price,
			created: req.body.created,
			modified: req.body.modified,
			category: req.body.category,
			name: req.body.name
		});

		product.save(function (err, product) {
			if (err) {
				return res.json(500, {
					message: 'Error saving product',
					error: err
				});
			}
			return res.json({
				message: 'saved',
				_id: product._id
			});
		});
	},

	/**
	 * productController.update()
	 */
	update: function (req, res) {
		var id = req.params.id;
		model.findOne({
			_id: id
		}, function (err, product) {
			if (err) {
				return res.json(500, {
					message: 'Error saving product',
					error: err
				});
			}
			if (!product) {
				return res.json(404, {
					message: 'No such product'
				});
			}

			product.title = req.body.title ? req.body.title : product.title;
			product.description = req.body.description ? req.body.description : product.description;
			product.price = req.body.price ? req.body.price : product.price;
			product.created = req.body.created ? req.body.created : product.created;
			product.modified = req.body.modified ? req.body.modified : product.modified;
			product.category = req.body.category ? req.body.category : product.category;
			product.name = req.body.name ? req.body.name : product.name;

			product.save(function (err, product) {
				if (err) {
					return res.json(500, {
						message: 'Error getting product.'
					});
				}
				if (!product) {
					return res.json(404, {
						message: 'No such product'
					});
				}
				return res.json(product);
			});
		});
	},

	/**
	 * productController.remove()
	 */
	remove: function (req, res) {
		var id = req.params.id;
		model.findByIdAndRemove(id, function (err, product) {
			if (err) {
				return res.json(500, {
					message: 'Error getting product.'
				});
			}
			return res.json(product);
		});
	}
};