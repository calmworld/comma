const { Client } = require("pg");
const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");

let stream = fs.createReadStream('./gm-seed.csv');
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on('data', function(data) {
    csvData.push(data);
  })
  .on('end', function() {
    // remove the first line: header
    csvData.shift();

    // create a new connection to the database
    const pool = new Pool({
      host: 'localhost',
      user: 'postgres',
      database: 'gmachines',
      password: '123',
      port: 5432
    });


    //const query = 'INSERT INTO clients (date, client, project, project_code, hours, billable, first_name, last_name, billable_rate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
    const query = "INSERT INTO clients (date, client, project, project_code, hours, billable, first_name, last_name, billable_rate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";

    pool.connect((err, client, done) => {
      if (err) throw err;

      try {
        csvData.forEach(row => {
          client.query(query, row, (err, res) => {
            if (err) {
              console.log(err.stack);
            } else {
              console.log("inserted " + res.rowCount + " row:", row);
            }
          });
        });
      } finally {
        done();
      }
    });
  });

stream.pipe(csvStream);

module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define('client', {
        date: {
            type: Sequelize.STRING
        }, 
        client: {
            type: Sequelize.STRING
            // primaryKey: true
        }, 
        project: {
            type: Sequelize.STRING
        }, 
        project_code: {
            type: Sequelize.STRING
        }, 
        hours: {
            type: Sequelize.DECIMAL
        }, 
        billable: {
            type: Sequelize.BOOLEAN
        }, 
        first_name: {
            type: Sequelize.STRING
        }, 
        last_name: {
            type: Sequelize.STRING
        }, 
        billable_rate: {
            type: Sequelize.INTEGER
        }
    });
    Client.removeAttribute('id');
    Client.removeAttribute('createdAt');
    Client.removeAttribute('updatedAt');
    return Client;
};



