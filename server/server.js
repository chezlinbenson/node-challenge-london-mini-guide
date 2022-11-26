const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
let stratfordData = require("../data/Stratford.json");

app.use(express.json());

// Level 100
app.get("/", (req, res) => {
  res.send({
    "/pharmcies": "retruns an array of pharmacies in a specific area",
  });
});

// Level 200
app.get("/pharmacies", (req, res) => {
  console.log(req.method, req.url);
  res.send(stratfordData.pharmacies);
});

app.get("/colleges", (req, res) => {
  console.log(req.method, req.url);
  res.send(stratfordData.colleges);
});

app.get("/doctors", (req, res) => {
  console.log(req.method, req.url);
  res.send(stratfordData.doctors);
});

app.get("/hospitals", (req, res) => {
  console.log(req.method, req.url);
  res.send(stratfordData.hospitals);
});
app.get("/stratford", (req, res) => {
  console.log(req.method, req.url);
  res.send(stratfordData.stratford);
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
