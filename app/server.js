const express = require('express') 
const app = express() 
//const { connection } = require('./database/db') 
 const {sequelize} = require('./models/index')
// Setting 
const PORT = process.env.PORT || 3000; 

// Middleware 
// Para porder rellenar el req.body
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Rutas
app.use(require('./routes/home.routes'))

// Iniciar el server
app.listen(PORT, ()=> {
  console.log(`Is connection in PORT http://localhost:${PORT}`);
  sequelize.sync({force: false}).then(() => {
  console.log("Is connection in sequelize")
  })
})