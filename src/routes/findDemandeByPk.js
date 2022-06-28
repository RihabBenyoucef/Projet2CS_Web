const { Demande } = require('../db/sequelize')
  
module.exports = (appTuto) => {
  appTuto.get('/api/demandes/:id', (req, res) => {
    Demande.findByPk(req.params.id)
      .then(demande => {
        const message = 'Une demande a bien été trouvé.'
        res.json({ message, data: demande })
      })
  })
}