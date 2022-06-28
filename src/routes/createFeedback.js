const { Feedback} = require('../db/sequelize')
  
module.exports = (appTuto) => {
  appTuto.post('/api/feedbacks', (req, res) => {
    Feedback.create(req.body)
      .then(feedback => {
        const message = `Le feedback ${req.body.id} a bien été crée.`
        res.json({ message, data: feedback })
      })
  })
}