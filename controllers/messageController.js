var model = require('../models/messageModel.js');

/**
 * messageController.js
 *
 * @description :: Server-side logic for managing messages.
 */
module.exports = {
  /**
   * messageController.list()
   */
  list: function(req, res) {
    model.find(function(err, messages) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting message.'
        });
      }
      return res.json(messages);
    });
  },

  /**
   * messageController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    model.findOne({
      _id: id
    }, function(err, message) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting message.'
        });
      }
      if (!message) {
        return res.json(404, {
          message: 'No such message'
        });
      }
      return res.json(message);
    });
  },

  /**
   * messageController.create()
   */
  create: function(req, res) {
    var message = new model({
      title: req.body.title,
      body: req.body.body,
      owner: req.body.owner,
      user: req.body.user,
      created: req.body.created
    });

    message.save(function(err, message) {
      if (err) {
        return res.status(500).json({
          message: 'Error saving message',
          error: err
        });
      }
      return res.json({
        message: 'saved',
        _id: message._id
      });
    });
  },

  /**
   * messageController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    model.findOne({
      _id: id
    }, function(err, message) {
      if (err) {
        return res.status(500).json({
          message: 'Error saving message',
          error: err
        });
      }
      if (!message) {
        return res.json(404, {
          message: 'No such message'
        });
      }

      message.title = req.body.title ? req.body.title : message.title;
      message.body = req.body.body ? req.body.body : message.body;
      message.owner = req.body.owner ? req.body.owner : message.owner;
      message.user = req.body.user ? req.body.user : message.user;
      message.created = req.body.created ? req.body.created : message.created;

      message.save(function(err, message) {
        if (err) {
          return res.status(500).json({
            message: 'Error getting message.'
          });
        }
        if (!message) {
          return res.json(404, {
            message: 'No such message'
          });
        }
        return res.json(message);
      });
    });
  },

  /**
   * messageController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    model.findByIdAndRemove(id, function(err, message) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting message.'
        });
      }
      return res.json(message);
    });
  }
};
