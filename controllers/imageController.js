var model = require('../models/imageModel.js');

/**
 * imageController.js
 *
 * @description :: Server-side logic for managing images.
 */
module.exports = {
	/**
	 * imageController.list()
	 */
	list: function (req, res) {
		model.find(function (err, images) {
			if (err) {
				return res.json(500, {
					message: 'Error getting image.'
				});
			}
			return res.json(images);
		});
	},

	/**
	 * imageController.show()
	 */
	show: function (req, res) {
		var id = req.params.id;
		model.findOne({
			_id: id
		}, function (err, image) {
			if (err) {
				return res.json(500, {
					message: 'Error getting image.'
				});
			}
			if (!image) {
				return res.json(404, {
					message: 'No such image'
				});
			}
			return res.json(image);
		});
	},

	/**
	 * imageController.create()
	 */
	create: function (req, res) {
		var image = new model({
			title: req.body.title,
			description: req.body.description,
			likes: req.body.likes,
			path: req.body.path,
			owner: req.body.owner,
			created: req.body.created,
			modified: req.body.modified
		});

		image.save(function (err, image) {
			if (err) {
				return res.json(500, {
					message: 'Error saving image',
					error: err
				});
			}
			return res.json({
				message: 'saved',
				_id: image._id
			});
		});
	},

	/**
	 * imageController.update()
	 */
	update: function (req, res) {
		var id = req.params.id;
		model.findOne({
			_id: id
		}, function (err, image) {
			if (err) {
				return res.json(500, {
					message: 'Error saving image',
					error: err
				});
			}
			if (!image) {
				return res.json(404, {
					message: 'No such image'
				});
			}

			image.title = req.body.title ? req.body.title : image.title;
			image.description = req.body.description ? req.body.description : image.description;
			image.likes = req.body.likes ? req.body.likes : image.likes;
			image.path = req.body.path ? req.body.path : image.path;
			image.owner = req.body.owner ? req.body.owner : image.owner;
			image.created = req.body.created ? req.body.created : image.created;
			image.modified = req.body.modified ? req.body.modified : image.modified;

			image.save(function (err, image) {
				if (err) {
					return res.json(500, {
						message: 'Error getting image.'
					});
				}
				if (!image) {
					return res.json(404, {
						message: 'No such image'
					});
				}
				return res.json(image);
			});
		});
	},

	/**
	 * imageController.remove()
	 */
	remove: function (req, res) {
		var id = req.params.id;
		model.findByIdAndRemove(id, function (err, image) {
			if (err) {
				return res.json(500, {
					message: 'Error getting image.'
				});
			}
			return res.json(image);
		});
	}
};