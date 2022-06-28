const { Utilisateur } = require('../db/sequelize')
  
module.exports = (appTuto) => {
  appTuto.get('/api/utilisateurs/:id', (req, res) => {
    Utilisateur.findByPk(req.params.id)
      .then(utilisateur => {
        const message = 'Un utilisateur a bien été trouvé.'
        res.json({ message, data: utilisateur })
      })
  })
}