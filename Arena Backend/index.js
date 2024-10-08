require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const Authentication = require("./routes/Authentication");

//database connection
connection();

//middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is the main page");
});

app.use(Authentication);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
