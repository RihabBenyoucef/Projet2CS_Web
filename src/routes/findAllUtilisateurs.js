const { Utilisateur } = require('../db/sequelize')
  
module.exports = (appTuto) => {
  appTuto.get('/api/utilisateurs', (req, res) => {
    Utilisateur.findAll()
      .then(utilisateurs => {
        const message = 'La liste des utilisateurs a bien été récupérée.'
        res.json({ message, data: utilisateurs })
      })
  })
}