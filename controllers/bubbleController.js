const db = require("../models");

module.exports = {
    //function to create Bubble
    create: function(req, res) {
        db.Bubble
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

    //function to remove Bubble
    remove: function(req, res) {
        db.Bubble
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findAll : function(req,res){
        db.Bubble
        .find(req.query)
        .sort({date: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
      }
};