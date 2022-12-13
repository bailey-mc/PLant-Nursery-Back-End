const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
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
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))
app.use(cors());

//////////////////////////
//CONTROLLERS
////////////////////////
const plantController = require('./controllers/plantroutes')
app.use('/plantnursery', plantController)
const usersController = require('./controllers/users')
app.use('/users', usersController)

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

// // seed route
// const plantSeed = require('./models/plantData.js')

// app.get('/seed', (req, res) => {
//   Plant.create(plantSeed, (error, data) => {
//     res.send('database seeded with: ' + data)
//   })
// })



// LISTENER
mongoose.connect('mongodb+srv://emonga:aBB4E9oTaQ48nM&Y@cluster0.0eubsxh.mongodb.net/?retryWrites=true&w=majority', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
},
()=>{
	console.log('connected to mongo');
})

// PORT
app.listen(PORT, () => {
  console.log('listening...')
})