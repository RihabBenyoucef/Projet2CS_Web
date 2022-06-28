const { Trajet } = require('../db/sequelize')
const { Op } = require('sequelize')

  
module.exports = (app) => {
  app.get('/api/trajets', (req, res) => {
      if (req.query.idOper){
          const idOper = req.query.idOper
          
          return  Trajet.findAndCountAll(
              {
                  where : {
                    idOper:idOper
                    }, 
                    
              })
          .then(({count,rows}) => {
            const message = `il y a ${count} trajets qui correspondent à l'opérateur numéro ${idOper}`
            res.json({ message, data: rows })
          })
      } else {
       
            Trajet.findAll()
            .then(trajets => {
              const message = 'La liste des trajets a bien été récupérée.'
              res.json({ message, data: trajets })
            })
            .catch(error => {
                const message =`La liste des trajets n'a pas pu être récupérée. Réessayez dans quelque instants.`
                res.status(500).json({message, data: error})
            })
        }
       
      }
    
  )
}