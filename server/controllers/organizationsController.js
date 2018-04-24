const db = require("../models");
const op = db.Sequelize.Op;

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
          [op.or]: [
            {
              id: req.params.id,
              status: "active"
            },{
              boardname: req.params.id,
              status: "active"
            }
          ]
        },
        include:[{all: true, include:[{all:true}]}]
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
        opId: req.body.op,
        imageId: req.body.imageId
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  upload: function(req, res) {
    console.log(req.body);
    db.image.create({
        image_url: req.body.url,
        threadId: req.body.threadId,
        postId: req.body.postId
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
