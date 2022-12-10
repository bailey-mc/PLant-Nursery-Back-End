const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Plant = require('./models/plantSchema.js')

const app = express();

app.use(express.json());
app.use(cors());

// seed route
const plantSeed = require('./models/plantData.js')

app.get('/seed', (req, res) => {
  Plant.create(plantSeed, (error, data) => {
    res.send('database seeded with: ' + data)
  })
})

// create route
app.post('/plantnursery', (req, res) => {
  Plant.create(req.body, (err, createdPlant) => {
    res.json(createdPlant)
  })
})

// read route
app.get('/plantnursery', (req, res) => {
  Plant.find({}, (err, foundPlants) => {
    res.json(foundPlants)
  })
})

// update route
app.put('/plantnursery/:id', (req, res) => {
  Plant.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPlant) => {
    res.json(updatedPlant);
  })
})

// delete route
app.delete('/plantnursery/:id', (req, res) => {
  console.log(req.params)
  Plant.findByIdAndDelete(req.params.id, (err, deletedPlant) => {
    res.json(deletedPlant);
  })
})

// LISTENER
mongoose.connect('mongodb://localhost:27017/plantnursery-MERN')
mongoose.connection.once('open', () => {
  console.log('connected to mongosh...')
});

// PORT
app.listen(3001, () => {
  console.log('listening...')
})