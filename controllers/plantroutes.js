const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Plant = require("../models/plantSchema.js");

////////////////////////////////
//ROUTES
////////////////////////////////

// create route
router.post("/", (req, res) => {
  Plant.create(req.body, (err, createdPlant) => {
    if (err) {
      res.send(err);
    } else {
      res.json(createdPlant);
    }
  });
});

// read route
router.get("/", (req, res) => {
  Plant.find({}, (err, foundPlants) => {
    console.log(foundPlants);
    if (err) {
      res.send(err);
    } else {
      res.json(foundPlants);
    }
  });
});

// update route
router.put("/:id", (req, res) => {
  Plant.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedPlant) => {
      res.json(updatedPlant);
    }
  );
});

// delete route
router.delete("/:id", (req, res) => {
  console.log(req.params);
  Plant.findByIdAndDelete(req.params.id, (err, deletedPlant) => {
    res.json(deletedPlant);
  });
});

//serach route

router.get("/:key/:value", (req, res) => {
  console.log(req.params.key + ' key ' + req.params.value + ' value');
    let key= req.params.key
    let value= req.params.value
  Plant.find({key: value}, (err, foundPlants) => {
    res.json(foundPlants);
  })
})

module.exports = router;
