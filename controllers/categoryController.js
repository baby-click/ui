var jade = require('jade');
var model = require('../models/categoryModel.js');

// resolve jade templates
var templatePathAdminList = require.resolve('../views/admin/list.jade');

// compile jade templates
var templateAdminList = jade.compileFile(templatePathAdminList);

module.exports = {
  listJson: function(req, res) {
    model.find({}, {
      '_id': 0,
      '__v': 0,
      'created': 0,
      'modified': 0
    }, function(err, categories) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting category.'
        });
      }
      return res.json(categories);
    });
  },

  listUserCatergories: function(req, res) {
    model.find({}, {
      '__v': 0,
      'created': 0,
      'modified': 0
    }, function(err, categories) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting categories.'
        });
      }

      return res.write(templateAdminList({
        categories: categories
      })).end();
    });
  },

  show: function(req, res) {
    var id = req.params.id;

    model.findOne({
      _id: id
    }, function(err, category) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting category.'
        });
      }

      if (!category) {
        return res.status(404).json({
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
        return res.status(500).json({
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

  update: function(req, res) {
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
        return res.status(500).json({
          message: 'Error saving category',
          error: err
        });
      }
      if (!category) {
        return res.status(404).json({
          message: 'No such category'
        });
      }

      category.created = category.created;
      category.modified = Date.now();

      category.save(function(err, category) {
        if (err) {
          return res.status(500).json({
            message: 'Error getting category.'
          });
        }
        if (!category) {
          return res.status(404).json({
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
        return res.status(500).json({
          message: 'Error getting category.'
        });
      }
      return res.json(category);
    });
  }
};
