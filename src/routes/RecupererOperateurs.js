const { Operateur } = require('../db/sequelize')
const { Op } = require('sequelize')

  
module.exports = (app) => {
  app.get('/api/operateurs', (req, res) => {
      if (req.query.nom){
          const nom = req.query.nom
          const limit= parseInt(req.query.limit) || 2
          return  Operateur.findAndCountAll(
              {
                  where : {
                      nom:{
                          [Op.like]:`%${nom}%`
                      }
                    }, 
                    limit : limit
              })
          .then(({count,rows}) => {
            const message = `il y a ${count} opérateurs qui correspondent au terme de recherche ${nom}`
            res.json({ message, data: rows })
          })
      } else {
        if (req.query.id){
            const id = req.query.id
           
            return  Operateur.findAndCountAll(
                {
                    where : {
                        id:id
                      }, 
                   
                })
            .then(({count,rows}) => {
              const message = `il y a ${count} opérateurs qui correspondent au terme de recherche ${id}`
              res.json({ message, data: rows })
            })
        } else{
            Operateur.findAll()
            .then(operateurs => {
              const message = 'La liste des opérateurs a bien été récupérée.'
              res.json({ message, data: operateurs })
            })
            .catch(error => {
                const message =`La liste des opérateurs n'a pas pu être récupérée. Réessayez dans quelque instants.`
                res.status(500).json({message, data: error})
            })
        }
       
      }
    
  })
}