const express = require("express");
const port = 3001;
const app = express();
app.set("view engine", "ejs");

const data = { name: "vidhi", branch: "CSE" };
app.get("/home", (req, res) => {
  res.render("home", data);
});

app.get("/cal", (req, res) => {
  res.render("cal");
});

app.get("/contactme", (req, res) => {
  res.render("contactme");
});

app.get("/studentrecords", (req, res) => {
  res.render("studentrecords", { stu: data1 });
});

const data1 = [
  { name: "abc", branch: "CSE", roll: 1 },
  { name: "abc1", branch: "it", roll: 2 },
  { name: "abc2", branch: "entc", roll: 3 },
];
app.listen(port, () => {
  console.log(`server at ${port} port`);
});
