const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3001;
const { dbConnection } = require("./config/config");

app.use(express.json());

app.use("/tasks", require("./routes/tasks"));

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
