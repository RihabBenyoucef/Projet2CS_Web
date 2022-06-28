const { Utilisateur } = require('../db/sequelize');
const utilisateur = require('../models/utilisateur');
  
module.exports = (appTuto) => {
  appTuto.delete('/api/utilisateurs/:id', (req, res) => {
    Utilisateur.findByPk(req.params.id).then(utilisateur => {
      const utilisateurDeleted = utilisateur;
      utilisateur.destroy({
        where: { id: utilisateur.id }
      })
      .then(_ => {
        const message = `L'utilisateur avec l'identifiant n°${utilisateurDeleted.id} a bien été supprimé.`
        res.json({message, data: utilisateurDeleted })
      })
    })
  })
}