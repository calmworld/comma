console.log('Where Ever You Are, There you Go!')

const express = require('express');
const app = express();
const db = require('./models');
const cors = require("cors")
const initRoutes = require('./routes/client.routes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
initRoutes(app);
const whitelist = ['http://localhost:3000']



db.sequelize.sync();
//DROP DATABASE During production
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });


let port = 3003;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})