const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

let stratfordData = require("../data/Stratford.json");
let heathrowData = require("../data/Heathrow.json");
let harrowData = require("../data/Harrow.json");

// let cities = require("../data/Stratford.json");

app.use(express.json());

// Create a Function that receives a city from the client and send back the city data
function cities(city) {
  switch (city.toUpperCase()) {
    case "HARROW":
      return harrowData;
    case "HEATHROW":
      return heathrowData;
    case "STRATFORD":
      return stratfordData;
    default:
      return null;
  }
}

function categories(category) {
  switch (category) {
    case "pharmacies":
      return "pharmacies";
    case "colleges":
      return "colleges";
    case "hospitals":
      return "hospitals";
    case "doctors":
      return "doctors";
    default:
      return null;
  }
}

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
// app.get("/stratford", (req, res) => {
//   console.log(req.method, req.url);
//   res.send(stratfordData.stratford);
// });

// Level 300
// Return data based on any city that is passed to the server

// app.get("/:city/pharmacies", (req, res) => {
//   console.log(req.method, req.url);
//   let city = req.params.city;
//   let cityCheck = cities(city);
//   if (cityCheck) {
//     res.send(cityCheck.pharmacies);
//   } else {
//     res.status(404).send("Error invalid city");
//   }
// });

// app.get("/:city/colleges", (req, res) => {
//   console.log(req.method, req.url);
//   let city = req.params.city;
//   let cityCheck = cities(city);
//   if (cityCheck) {
//     res.send(cityCheck.colleges);
//   } else {
//     res.status(404).send("Error invalid city");
//   }
// });

// app.get("/:city/doctors", (req, res) => {
//   console.log(req.method, req.url);
//   let city = req.params.city;
//   let cityCheck = cities(city);
//   if (cityCheck) {
//     res.send(cityCheck.doctors);
//   } else {
//     res.status(404).send("Error invalid city");
//   }
// });

// app.get("/:city /hospitals", (req, res) => {
//   console.log(req.method, req.url);
//   let city = req.params.city;
//   let cityCheck = cities(city);
//   if (cityCheck) {
//     res.send(cityCheck.hospitals);
//   } else {
//     res.status(404).send("Error invalid city");
//   }
// });

// Level 500
app.get("/:city/:category", (req, res) => {
  console.log(req.method, req.url);
  let city = req.params.city;
  let category = req.params.category.toLowerCase();
  let cityCheck = cities(city);
  let categoryCheck = categories(category);
  if (cityCheck) {
    if (categoryCheck) {
      res.send(cityCheck[categoryCheck]);
    } else {
      res.status(404).send("Error invalid category");
    }
  } else {
    res.status(404).send("Error invalid city");
  }
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
