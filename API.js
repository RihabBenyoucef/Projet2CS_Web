const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')

const app = express()
const port = process.env.PORT || 3000
app 
.use(bodyParser.json())

sequelize.initDb()

app.get('/', (req,res) =>{
   res.json('hello, heroku!')
})
// ici nous placons nos futures points de terminison
//riheb
require('./src/routes/createDemande')(app)
require('./src/routes/createMalade')(app)
require('./src/routes/createTrajet')(app)
require('./src/routes/createCourse')(app)
require('./src/routes/createFacture')(app)
require('./src/routes/createFactureOP')(app)
require('./src/routes/findAllFactures')(app)
require('./src/routes/findAllFacturesOP')(app)
require('./src/routes/findAllCourses')(app)
require('./src/routes/findAllDemandes')(app)
require('./src/routes/findAllMalades')(app)
require('./src/routes/findAlltradjet')(app)
require('./src/routes/login')(app)
require('./src/routes/RecupererOperateurs')(app)
require('./src/routes/creerOperateur')(app)
// require('./src/routes/CalculEcart')(app)




// on ajoute la gestion des erreurs 404

app.use(({res})=>
{
   const message = ' Impossible de trouver la ressource demandée! Vous pouvez essayer une autre URL.'
   res.status(404).json({message})
})



app.listen(port, ()=> console.log(`Notre application node est déclarée sur : http://localhost: ${port}`))

