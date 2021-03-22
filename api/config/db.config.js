module.exports = {
    host: 'localhost',
    username: null,
    password: null,
    database: 'gmachines',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };