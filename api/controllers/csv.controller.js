const db = require('../models');
const Client = db.clients;


const getClients = (req, res) => {
  Client.findAll()
    .then((data) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clients.",
      });
    });
};



const postClients = (req, res) => {
  if (!req.body.client) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a newEntry
  const newEntry = {
    date: req.body.date,
    client: req.body.client,
    project: req.body.project,
    project_code: req.body.project_code,
    hours: req.body.hours,
    billable: req.body.billable ? req.body.billable : false,
    first_name: req.body.first_name, 
    last_name: req.body.last_name, 
    billable_rate: req.body.billable_rate
  };


  Client.create(newEntry)
    .then((data) => {
      res.send(data);
      // res.header("Access-Control-Allow-Origin", "*")
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating clients.",
      });
    });
};

module.exports = {
  getClients,
  postClients
};