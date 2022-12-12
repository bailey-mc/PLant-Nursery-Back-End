const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
// const Plant = require('./models/plantSchema.js')


//port stuff for heroku
// let PORT = 3001;
// if(process.env.PORT){
// 	PORT = process.env.PORT
// }
let PORT = process.env.PORT || 3001 ;





//middleware
const app = express();
app.use(express.json());


if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const domainsFromEnv = process.env.CORS_DOMAINS || ""

const whitelist = domainsFromEnv.split(",").map(item => item.trim())

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

// app.use(cors());

//////////////////////////
//CONTROLLERS
////////////////////////
const plantController = require('./controllers/plantroutes')
app.use('/plantnursery', plantController)

///////////////////////////
//ROUTES
///////////////////////////
app.get('/', (req, res) => {
  res.send('Hello World!');
})

// seed route
const plantSeed = require('./models/plantData.js')

app.get('/seed', (req, res) => {
  Plant.create(plantSeed, (error, data) => {
    res.send('database seeded with: ' + data)
  })
})

//route for heroku
// app.get('/', (req, res) => {
//   console.log('hiii');
//   res.send('hi')
// })

// // create route
// app.post('/plantnursery/new', (req, res) => {
//   Plant.create(req.body, (err, createdPlant) => {
//     res.json(createdPlant)
    
//   })
// })

// // read route
// app.get('/plantnursery', (req, res) => {
//   Plant.find({}, (err, foundPlants) => {
//     console.log(foundPlants);
//     // res.send('/plantnursery')
//     res.json(foundPlants)
//   })
// })

// // update route
// app.put('/plantnursery/:id', (req, res) => {
//   Plant.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPlant) => {
//     res.json(updatedPlant);
//   })
// })

// // delete route
// app.delete('/plantnursery/:id', (req, res) => {
//   console.log(req.params)
//   Plant.findByIdAndDelete(req.params.id, (err, deletedPlant) => {
//     res.json(deletedPlant);
//   })
// })

// LISTENER
mongoose.connect('mongodb://localhost:27017/plantnursery-MERN')
mongoose.connection.once('open', () => {
  console.log('connected to mongosh...')
});

// PORT
app.listen(PORT, () => {
  console.log('listening...')
})