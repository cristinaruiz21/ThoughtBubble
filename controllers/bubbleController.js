const db = require("../models");

module.exports = {
    //function to create Bubble
    create: function(data) {
        db.Bubble
          .create(data)
          .then(dbModel => dbModel)
          .catch(err => console.log(err));
      },

    //function to remove Bubble
    remove: function(req, res) {
        db.Bubble
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findAll: function(req, res) {
        console.log(req.user)

        db.Bubble
          .find({author : req.user.username})
          .then(dbModel => res.json(dbModel),

          console.log(req.body))
          .catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        db.Bubble
          .findById(req.params.id)
          .then(dbModel => {
            console.log(dbModel)
            res.json(dbModel)
          })
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.Bubble
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
      
};