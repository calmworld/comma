console.log('Where Ever You Are, There you Go!')

const express = require('express');
const app = express();
const db = require('./models');
const initRoutes = require('./routes/client.routes');



app.use(express.urlencoded({ extended: true }));
initRoutes(app);

db.sequelize.sync();
//DROP DATABASE During production
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });


let port = 6000;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})