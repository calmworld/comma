const db = require('../models');
const Client = db.clients;


const getClients = (req, res) => {
    Client.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving clients.",
        });
      });
  };
  
  module.exports = {
    getClients
  };