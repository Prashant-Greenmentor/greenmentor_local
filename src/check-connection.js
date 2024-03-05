const { Sequelize } = require('sequelize');

// Replace these values with your RDS endpoint, database name, username, and password
const rdsEndpoint = 'greenmentor-stage.cnk88oqm063q.ap-south-1.rds.amazonaws.com';
const dbName = 'postgres';
const username = 'postgres';
const password = 'greenmentor';

// Create Sequelize instance
const sequelize = new Sequelize(dbName, username, password, {
  host: rdsEndpoint,
  dialect: 'postgres'
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    // Close the Sequelize instance
    await sequelize.close();
  }
}

// Call the function to test the connection
testConnection();
