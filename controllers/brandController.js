var model = require('../models/brandModel.js');

/**
 * brandController.js
 *
 * @description :: Server-side logic for managing brands.
 */
module.exports = {
  listJson: function(req, res) {
    model.find(function(err, brands) {
      if (err) {
        return res.json(500, {
          message: 'Error getting brand.'
        });
      }
      return res.json(brands);
    });
  },

  listRender: function(req, res) {
    model.find(function(err, brands) {
      if (err) {
        return res.json(500, {
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
        return res.json(500, {
          message: 'Error getting brand.'
        });
      }
      if (!brand) {
        return res.json(404, {
          message: 'No such brand'
        });
      }
      return res.json(brand);
    });
  },

  /**
   * brandController.create()
   */
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
        return res.json(500, {
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

  /**
   * brandController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    model.findOne({
      _id: id
    }, function(err, brand) {
      if (err) {
        return res.json(500, {
          message: 'Error saving brand',
          error: err
        });
      }
      if (!brand) {
        return res.json(404, {
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
          return res.json(500, {
            message: 'Error getting brand.'
          });
        }
        if (!brand) {
          return res.json(404, {
            message: 'No such brand'
          });
        }
        return res.json(brand);
      });
    });
  },

  /**
   * brandController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    model.findByIdAndRemove(id, function(err, brand) {
      if (err) {
        return res.json(500, {
          message: 'Error getting brand.'
        });
      }
      return res.redirect('back');
    });
  }
};
