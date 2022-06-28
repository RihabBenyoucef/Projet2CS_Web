const { Malade } = require('../db/sequelize')
  
module.exports = (appTuto) => {
  appTuto.get('/api/malades/:id', (req, res) => {
    Malade.findByPk(req.params.id)
      .then(malade => {
        const message = 'Un malade a bien été trouvé.'
        res.json({ message, data: malade })
      })
  })
}