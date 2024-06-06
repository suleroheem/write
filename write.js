const mysql = require('mysql2/promise');

async function insertData() {
  const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'your-database'});

  try {
    // Insert rows into CUSTOMERS table
    await connection.query(`
      INSERT INTO Customers (CustCode, custName, custAddress, custTel) 
      VALUES 
      ('C01', 'John Doe', '123 Main St', '123-456-7890'),
      ('C02', 'Jane Smith', '456 Maple Ave', '987-654-3210'),
      ('C03', 'Alice Johnson', '789 Oak Dr', '555-555-5555');
    `);

    // Insert rows into ORDERS table
    await connection.query(`
      INSERT INTO Orders (OrderCode, OrderDate, CustCode) 
      VALUES 
      (101, '2023-01-15', 'C01'),
      (102, '2023-02-20', 'C02'),
      (103, '2023-03-25', 'C03');
    `);

    console.log('Data inserted successfully.');
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    await connection.end();
  }
}

insertData();
const { Client } = require('pg');
const client = new Client({
  connectionString: 'your-database-connection-string'
});

async function insertData() {
  await client.connect();

  try {
    // Insert rows into CUSTOMERS table
    await client.query(`
      INSERT INTO Customers (CustCode, custName, custAddress, custTel) 
      VALUES 
      ('C01', 'John Doe', '123 Main St', '123-456-7890'),
      ('C02', 'Jane Smith', '456 Maple Ave', '987-654-3210'),
      ('C03', 'Alice Johnson', '789 Oak Dr', '555-555-5555');
    `);

    // Insert rows into ORDERS table
    await client.query(`
      INSERT INTO Orders (OrderCode, OrderDate, CustCode) 
      VALUES 
      (101, '2023-01-15', 'C01'),
      (102, '2023-02-20', 'C02'),
      (103, '2023-03-25', 'C03');
    `);

    console.log('Data inserted successfully.');
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    await client.end();
  }
}

insertData();

