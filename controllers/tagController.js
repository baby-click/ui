var tagModel = require('../models/tagModel.js');

module.exports = {
  listJson: function(req, res) {
    tagModel.find({}, {
      '_id': 0,
      '__v': 0,
      'created': 0,
      'modified': 0
    }, function(err, categories) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting tag.'
        });
      }
      return res.json(categories);
    });
  },

  show: function(req, res) {
    var id = req.params.id;
    tagModel.findOne({
      _id: id
    }, function(err, tag) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting tag.'
        });
      }
      if (!tag) {
        return res.status(404).json({
          message: 'No such tag'
        });
      }
      return res.json(tag);
    });
  },

  create: function(req, res) {
    var tag = new tagModel({
      created: Date.now(),
      modified: Date.now()
    });

    tag.title.push({
      lang: req.body.lang,
      value: req.body.title
    });

    tag.save(function(err, tag) {
      if (err) {
        return res.status(500).json({
          message: 'Error saving tag',
          error: err
        });
      }

      return res.json({
        message: 'saved',
        _id: tag._id
      });
    });
  },

  update: function(req, res) {
    var id = req.params.id;
    var title = {
      lang: req.body.lang,
      value: req.body.title
    };

    tagModel.findOneAndUpdate({
      '_id': id,
      'title.lang': {
        $ne: title.lang
      }
    }, {
      $push: {
        title: title
      }
    }, function(err, tag) {
      if (err) {
        return res.status(500).json({
          message: 'Error saving tag',
          error: err
        });
      }
      if (!tag) {
        return res.status(404).json({
          message: 'No such tag'
        });
      }

      tag.created = tag.created;
      tag.modified = Date.now();

      tag.save(function(err, tag) {
        if (err) {
          return res.status(500).json({
            message: 'Error getting tag.'
          });
        }
        if (!tag) {
          return res.status(404).json({
            message: 'No such tag'
          });
        }
        return res.json(tag);
      });
    });
  },

  remove: function(req, res) {
    var id = req.params.id;

    tagModel.findByIdAndRemove(id, function(err, tag) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting tag.'
        });
      }
      return res.json(tag);
    });
  }
};
