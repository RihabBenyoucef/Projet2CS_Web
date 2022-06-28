const { Feedback } = require('../db/sequelize')
const feedback = require('../models/feedback')
const feedback = require('../models/feedback')
  
module.exports = (appTuto) => {
  appTuto.put('/api/feedbacks/:id', (req, res) => {
    const id = req.params.id
    Feedback.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      Feedback.findByPk(id).then(feedback => {
        const message = `Le feedback ${feedback.id} a bien été modifié.`
        res.json({message, data: feedback })
      })
    })
  })
}