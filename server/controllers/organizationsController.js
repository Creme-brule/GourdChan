const db = require("../models");

// Defining methods for the booksController
const controller = {
  findAll: (req, res) => {
    db.category.findAll({
        where: {
          category_status: "active"
        },
        include: [{all: true}]
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("model " + req.params.model);
    db[req.params.model].findOne({
        where: {
          id: req.params.id,
          status: "active"
        },
        include:[{all: true}]
      })
      .then(dbModel => {
        if (dbModel) {
          res.json(dbModel);
        } else {
          res.status(404).json({
            message: 'Id not found.'
          });
        }
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    db[req.body.model].create({
        title: req.body.title,
        text: req.body.text,
        boardId: req.body.boardId,
        threadId: req.body.threadId,
        opId: req.body.op
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Organization.update({
        name: req.body.name,
        description: req.body.description
      }, {
        where: {
          id: req.params.id,
          inactive: false
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Organization.update({
        inactive: true
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

export { controller as default };
