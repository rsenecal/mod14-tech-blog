// const mongoose = require('mongoose');

// // Wrap Mongoose around local connection to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/techblogDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Export connection
// module.exports = mongoose.connection;

require("dotenv").config();

const Sequelize = require("sequelize");

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

module.exports = sequelize;