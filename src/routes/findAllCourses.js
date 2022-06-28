const { Course } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/courses', (req, res) => {
    if (req.query.idTrajet){
      const idOper= req.query.idTrajet
      
      return  Course.findAndCountAll(
          {
              where : {
                idTrajet:idTrajet
                }, 
                
          })
      .then(({count,rows}) => {
      const message = `il y a ${count} courses qui correspondent au trajet numéro ${idTrajet}`
        res.json({ message, data: rows })
      })
  } else {
    Course.findAll()
      .then(courses => {
        const message = 'La liste des courses a bien été récupérée.'
        res.json({ message, data: courses })
      })
  }
    
  })
}