const { Course } = require('../db/sequelize')
  
module.exports = (app) => {
  app.post('/api/courses', (req, res) => {
    Course.create(req.body)
      .then(course => {
        const message = `La course ${req.body.id} a bien été crée.`
        res.json({ message, data: course })
      })
  })
}