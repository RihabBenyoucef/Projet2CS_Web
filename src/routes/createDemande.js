const { Demande } = require('../db/sequelize')
  
module.exports = (appTuto) => {
  appTuto.post('/api/demandes', (req, res) => {
    Demande.create(req.body)
      .then(demande => {
        const message = `La demande ${req.body.id} a bien été crée.`
        res.json({ message, data: demande })
      })
  })
}