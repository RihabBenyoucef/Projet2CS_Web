const { Malade } = require('../db/sequelize')
const malade = require('../models/malade')
  
module.exports = (appTuto) => {
  appTuto.put('/api/malades/:id', (req, res) => {
    const id = req.params.id
    Malade.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      Malade.findByPk(id).then(malade => {
        const message = `Le malade ${malade.id} a bien été modifié.`
        res.json({message, data: malade })
      })
    })
  })
}