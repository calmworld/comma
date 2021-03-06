const express = require('express');
const router = express.Router();
const csvController = require('../controllers/csv.controller');

let routes = (app) => {
    router.get('/clients', csvController.getClients);
    router.post('/new', csvController.postClients);

    app.use('/api/csv', router);
}

module.exports = routes;