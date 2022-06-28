const { Malade } = require('../db/sequelize');
const malade = require('../models/malade');
  
module.exports = (appTuto) => {
  appTuto.delete('/api/malades/:id', (req, res) => {
    Malade.findByPk(req.params.id).then(malade => {
      const maladeDeleted = malade;
      malade.destroy({
        where: { id: malade.id }
      })
      .then(_ => {
        const message = `Le malade avec l'identifiant n°${factureDeleted.id} a bien été supprimé.`
        res.json({message, data: maladeDeleted })
      })
    })
  })
}