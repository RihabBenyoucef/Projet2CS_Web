const { Feedback } = require('../db/sequelize')
  
module.exports = (appTuto) => {
  appTuto.get('/api/feedbacks/:id', (req, res) => {
    Feedback.findByPk(req.params.id)
      .then(feedback => {
        const message = 'Un feedback a bien été trouvé.'
        res.json({ message, data: feedback })
      })
  })
}