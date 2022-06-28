const { Demande } = require('../db/sequelize')
  
module.exports = (appTuto) => {
  appTuto.get('/api/demandes', (req, res) => {
    Demande.findAll()
      .then(demandes => {
        const message = 'La liste des demandes a bien été récupérée.'
        res.json({ message, data: demandes })
      })
  })
}