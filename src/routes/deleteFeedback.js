const { Feedback } = require('../db/sequelize');
const feedback = require('../models/feedback');
  
module.exports = (appTuto) => {
  appTuto.delete('/api/feedbacks/:id', (req, res) => {
    Feedback.findByPk(req.params.id).then(feedback => {
      const feedbackDeleted = feedback;
      feedback.destroy({
        where: { id: feedback.id }
      })
      .then(_ => {
        const message = `Le feedback avec l'identifiant n°${factureDeleted.id} a bien été supprimé.`
        res.json({message, data: feedbackDeleted })
      })
    })
  })
}