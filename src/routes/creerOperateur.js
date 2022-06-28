const { ValidationError } = require('sequelize')
const { Operateur } = require('../db/sequelize')
  
module.exports = (app) => {
  app.post('/api/operateurs', (req, res) => {
    Operateur.create(req.body)
      .then(operateur => {
        const message = `L\'opérateur ${req.body.nom} a bien été crée.`
        res.json({ message, data: operateur })
      })
      .catch(error => {
          if ( error instanceof ValidationError){
              return res.status(400).json({message: error.message, data: error})
          }
          const message=' L\'operateur n\'a pas pu être ajouté. Réessayez dans quelques instants.'
          res.status(500).json({message, data:error})
      })
  })
}