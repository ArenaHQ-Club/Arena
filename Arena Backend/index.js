require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const Authentication = require("./routes/Authentication");
const Teams = require("./routes/TeamCreation");
const Questions = require("./routes/QuestionCreation");
const Topics = require("./routes/TopicCreation");
const Difficulty = require("./routes/DifficultyCreation");
const Article = require("./routes/ArticlesCreation");
const Quiz = require("./routes/QuizCreation");
const cookieParser = require("cookie-parser");
//database connection
connection();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000", // Adjust this to your frontend's origin
    credentials: true, // Allow cookies to be sent
  })
);

app.get("/", (req, res) => {
  res.send("This is the main page");
});

app.use(Authentication);
app.use(Teams);
app.use(Questions);
app.use(Topics);
app.use(Difficulty);
app.use(Article);
app.use(Quiz);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
