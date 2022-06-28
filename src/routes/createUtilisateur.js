const { Utilisateur } = require('../db/sequelize')
  
module.exports = (appTuto) => {
  appTuto.post('/api/utilisateurs', (req, res) => {
    Utilisateur.create(req.body)
      .then(utilisateur => {
        const message = `L'utilisateur ${req.body.id} a bien été crée.`
        res.json({ message, data: utilisateur })
      })
  })
}