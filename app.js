const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const mysql = require('mysql2/promise');
const app = express();
const PORT =  3000;


// Middleware
app.use(cors());
app.use(bodyParser.json());


// Test route
app.get('/', (req, res) => {
  res.send('Hello from Clapnet Backend!');
});

app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
});
