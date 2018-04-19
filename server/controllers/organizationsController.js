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
    const model = req.params.location;
    console.log(model);
    db[model].findOne({
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
    const model = req.body.location;
    console.log(req.body);
    db[model].create({
        title: req.body.title,
        text: req.body.text,
        linkId: req.body.locationId
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
