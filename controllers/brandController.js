var model = require('../models/brandModel.js');

module.exports = {
  listJson: function(req, res) {
    model.find({}, {
      '_id': 0,
      '__v': 0,
      'created': 0,
      'modified': 0
    }, function(err, brands) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting brand.'
        });
      }
      return res.json(brands);
    });
  },

  listRender: function(req, res) {
    model.find(function(err, brands) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting brand.'
        });
      }
      return res.render('admin/list', {
        brands: brands
      });
    });
  },

  /**
   * brandController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    model.findOne({
      _id: id
    }, function(err, brand) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting brand.'
        });
      }
      if (!brand) {
        return res.status(404).json({
          message: 'No such brand'
        });
      }
      return res.json(brand);
    });
  },

  create: function(req, res) {
    var brand = new model({
      name: req.body.name,
      tags: req.body.tags,
      url: req.body.url,
      priority: req.body.priority,
      created: req.body.created,
      modified: req.body.modified,
      partner: req.body.partner
    });

    brand.save(function(err, brand) {
      if (err) {
        return res.status(500).json({
          message: 'Error saving brand',
          error: err
        });
      }
      return res.json({
        message: 'saved',
        _id: brand._id
      });
    });
  },

  update: function(req, res) {
    var id = req.params.id;
    model.findOne({
      _id: id
    }, function(err, brand) {
      console.log('err: ' + err);
      console.log('brand: ' + brand);

      if (err) {
        return res.status(500).json({
          message: 'Error saving brand',
          error: err
        });
      }
      if (!brand) {
        return res.status(404).json({
          message: 'No such brand'
        });
      }

      brand.name = req.body.name ? req.body.name : brand.name;
      brand.tags = req.body.tags ? req.body.tags : brand.tags;
      brand.url = req.body.url ? req.body.url : brand.url;
      brand.priority = req.body.priority ? req.body.priority : brand.priority;
      brand.created = req.body.created ? req.body.created : brand.created;
      brand.modified = req.body.modified ? req.body.modified : brand.modified;
      brand.partner = req.body.partner ? req.body.partner : brand.partner;

      brand.save(function(err, brand) {
        if (err) {
          return res.status(500).json({
            message: 'Error getting brand.'
          });
        }
        if (!brand) {
          return res.status(404).json({
            message: 'No such brand'
          });
        }
        return res.redirect('/');
      });
    });
  },

  remove: function(req, res) {
    var id = req.params.id;
    model.findByIdAndRemove(id, function(err, brand) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting brand.'
        });
      }
      return res.redirect('/');
    });
  }
};
