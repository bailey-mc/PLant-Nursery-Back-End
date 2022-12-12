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
let PORT = process.env.PORT || 3001;


//middleware
const app = express();
app.use(express.json());
app.use(cors());

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

//error message for page that does not exist
app.use((req,res, next)=> {
  res.send('404 page not found')
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
mongoose.connect('mongodb+srv://musiclover:bobdylaN%2196@mymusic.wef1hdo.mongodb.net/?retryWrites=true&w=majority', ()=>{
	console.log('connected to mongo');
})

// PORT
app.listen(PORT, () => {
  console.log('listening...')
})