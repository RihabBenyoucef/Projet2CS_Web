const { FactureOP } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/facturesOP', (req, res) => {
    if (req.query.idOper){
      const idOper= req.query.idOper
      
      return  Course.findAndCountAll(
          {
              where : {
                  idOper:idOper
                }, 
                
          })
      .then(({count,rows}) => {
      const message = `il y a ${count} factures qui correspondent à l'opérateur numéro ${idOper}`
        res.json({ message, data: rows })
      })
  }else {
    FactureOP.findAll()
      .then(facturesOP => {
        const message = 'La liste des factures des opérateurs a bien été récupérée.'
        res.json({ message, data: facturesOP })
      })
  }
    
  })
}