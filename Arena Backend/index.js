require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const Authentication = require("./routes/Authentication");
const Teams = require("./routes/TeamCreation");
const Questions = require("./routes/QuestionCreation");
const Topics = require("./routes/TopicCreation");
//database connection
connection();

//middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is the main page");
});

app.use(Authentication);
app.use(Teams);
app.use(Questions);
app.use(Topics);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
