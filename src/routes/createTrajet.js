const { Trajet } = require('../db/sequelize')

  
module.exports = (app) => {
  app.post('/api/trajets', (req, res) => {
    Trajet.create(req.body)
      .then(trajet => {
        const message = `Le trajet de la course numéro ${req.body.idCourse} a bien été crée.`
        res.json({ message, data: trajet })
      })
  })
}