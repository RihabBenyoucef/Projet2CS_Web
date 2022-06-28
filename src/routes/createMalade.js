const { Malade } = require('../db/sequelize')
  
module.exports = (appTuto) => {
  appTuto.post('/api/malades', (req, res) => {
    Malade.create(req.body)
      .then(malade => {
        const message = `Le malade ${req.body.nom} a bien été crée.`
        res.json({ message, data: malade })
      })
  })
}