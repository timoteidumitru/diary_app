let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let database = require("./database/db");
require("dotenv").config();

const diaryRoute = require("../server/routes/diary.routes");

mongoose.Promise = global.Promise;
mongoose
  .connect(database.db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database connected sucessfully!");
    },
    (error) => {
      console.log("Database could not be connected : " + error);
    }
  );
const app = express();

// Middlewhere
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

// Routes
app.use("/", diaryRoute);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Connected to port " + port);
});

// Error Handling, last resort
app.use((req, res, next) => {
  next(res.status(404));
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
