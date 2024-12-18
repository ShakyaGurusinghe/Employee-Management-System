const express = require('express');
const dbConnection = require('./config/db');
const routes = require("./routes/employees");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors({origin: true,credentials: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connect to the database
dbConnection();

app.get('/', (req, res) => res.send("Hello World!"));
app.use('/api/employees',routes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));