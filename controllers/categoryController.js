var model = require('../models/categoryModel.js');

/**
 * categoryController.js
 *
 * @description :: Server-side logic for managing categorys.
 */
module.exports = {
  list: function(req, res) {
    model.find(function(err, categorys) {
      if (err) {
        return res.json(500, {
          message: 'Error getting category.'
        });
      }
      return res.json(categorys);
    });
  },

  show: function(req, res) {
    var id = req.params.id;
    model.findOne({
      _id: id
    }, function(err, category) {
      if (err) {
        return res.json(500, {
          message: 'Error getting category.'
        });
      }
      if (!category) {
        return res.json(404, {
          message: 'No such category'
        });
      }
      return res.json(category);
    });
  },

  create: function(req, res) {
    var category = new model({
      created: Date.now(),
      modified: Date.now()
    });

    category.title.push({
      lang: req.body.lang,
      value: req.body.title
    });

    category.description.push({
      lang: req.body.lang,
      value: req.body.description
    });

    category.save(function(err, category) {
      if (err) {
        return res.json(500, {
          message: 'Error saving category',
          error: err
        });
      }
      return res.json({
        message: 'saved',
        _id: category._id
      });
    });
  },

  hans: function(req, res) {
    var id = req.params.id;
    var title = {
      lang: req.body.lang,
      value: req.body.title
    };
    var description = {
      lang: req.body.lang,
      value: req.body.description
    };

    model.findOneAndUpdate({
      '_id': id,
      'title.lang': {
        $ne: title.lang
      },
      'description.lang': {
        $ne: description.lang
      }
    }, {
      $push: {
        title: title,
        description: description
      }
    }, function(err, category) {
      if (err) {
        return res.json(500, {
          message: 'Error saving category',
          error: err
        });
      }
      if (!category) {
        return res.json(404, {
          message: 'No such category'
        });
      }

      category.created = category.created;
      category.modified = Date.now();

      category.save(function(err, category) {
        if (err) {
          return res.json(500, {
            message: 'Error getting category.'
          });
        }
        if (!category) {
          return res.json(404, {
            message: 'No such category'
          });
        }
        return res.json(category);
      });
    });
  },

  update: function(req, res) {
    var id = req.params.id;

    model.findOne({
      _id: id
    }, function(err, category) {
      if (err) {
        return res.json(500, {
          message: 'Error saving category',
          error: err
        });
      }
      if (!category) {
        return res.json(404, {
          message: 'No such category'
        });
      }

      category.created = category.created;
      category.modified = Date.now();

      category.description.push({
        lang: req.body.lang,
        value: req.body.description
      });

      category.save(function(err, category) {
        if (err) {
          return res.json(500, {
            message: 'Error getting category.'
          });
        }
        if (!category) {
          return res.json(404, {
            message: 'No such category'
          });
        }
        return res.json(category);
      });
    });
  },

  remove: function(req, res) {
    var id = req.params.id;
    model.findByIdAndRemove(id, function(err, category) {
      if (err) {
        return res.json(500, {
          message: 'Error getting category.'
        });
      }
      return res.json(category);
    });
  }
};
