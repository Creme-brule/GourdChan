var PORT = process.env.PORT || 3001; // Sets an initial port. We'll use this later in our listener
// ensure environment variables are loaded
import boardList from './database/boardlist.json';
import App from './server'
import AWS from "aws-sdk";
// Requiring our models for syncing
import db from './server/models';

const app = App(__dirname);

//use sync({force:true}) to drop all tables before trying to create
db.sequelize.sync({force:true}).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
  });
}).then(function() {
  boardList.forEach(boardcat => {
    db.category.findOrCreate({
        where: {
            categoryname: boardcat.name
        },
        defaults: {
            categoryname: boardcat.name
        }
    }).then(() => {
        
        boardcat.subs.forEach(sub => {
            db.board.findOrCreate({
                where: {
                    boardname: sub.name
                },
                defaults: {
                    boardname: sub.name,
                    categoryId: boardcat.id
                }
            });
        });
    });
  })
});
