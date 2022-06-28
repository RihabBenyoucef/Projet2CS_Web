const { Malade } = require('../db/sequelize')
  
module.exports = (appTuto) => {
  appTuto.get('/api/malades', (req, res) => {
    Malade.findAll()
      .then(malades => {
        const message = 'La liste des malades a bien été récupérée.'
        res.json({ message, data: malades })
      })
  })
}