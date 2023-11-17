const express = require("express");
const app = express();
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')

require("dotenv").config();
const PORT = process.env.PORT || 3001;
const { dbConnection } = require("./config/config");

app.use(express.json());

app.use("/tasks", require("./routes/tasks"));

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
