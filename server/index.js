const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const db = require("./DB");

const registerRouter = require("./api/register/register_router");
const hrRouter = require("./api/hr/hr_router");
const companyRouter = require("./api/company/company_router");
const jobOfferRouter = require("./api/jobOffer/jobOffer_router");
const studentsRouter = require("./api/student/studentRouter");
const coursesRouter = require("./api/courses/course_router");
const adminRouter = require("./api/admin/adminRouter");
const passport = require("passport");
const passportFunc = require("./config/passport");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 4201;
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.set("view engine", "ejs");
app.set("trust proxy", true);

db.on("error", () => {
  console.log(chalk.red("Connection error"));
});

app.listen(PORT, () => {
  console.log(
    `${chalk.green("tech_career-employers-team2")} ${chalk.yellow(
      "live and up on port"
    )} ${chalk.red(PORT)}`
  );
});

app.use(passport.initialize());
app.use("/registration", registerRouter);
app.use("/hrs", hrRouter);
app.use("/companies", companyRouter);
app.use("/jobOffers", jobOfferRouter);
app.use("/students", studentsRouter);
app.use("/courses", coursesRouter);
app.use("/adminRouter", adminRouter);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}
