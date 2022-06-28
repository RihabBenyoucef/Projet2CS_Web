const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { Sequelize } = require('sequelize')
const { success, getUniqueId} = require('./helper.js')

let operateurs = require('./mock-operateurs')
let courses = require('./mock-courses')
let trajets = require('./mock-trajets.js')
let factures = require('./mock-factures.js')
const { and } = require('sequelize/types/sequelize.js')

const appTuto = express()
const port = 3000

const sequelize = new Sequelize(
 'projet',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'postgres',
    dialectOptions:
    {
      timezone: 'Etc/GMT'
    },
    logging : false
  }
)

appTuto.use(morgan('dev'))
appTuto.use(bodyParser.json())
  
appTuto.get('/', (req, res) => res.send('Hello again, Projet 2Cs!'))

appTuto.get('/api/NodeTuto/:id', (req, res) => {
    const id = req.params.id
    res.send(`Vous avez demandé la donnée numero ${id}`)
})
//****************Opérateurs********************* */

// On retourne la liste des opérateurs au format JSON, avec un message :

  


appTuto.put('/api/operateurs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const operateurUpdated = { ...req.body, id: id }
    operateurs = operateurs.map(operateur => {
     return operateur.id === id ? operateurUpdated : operateur
    })
     
    const message = `L'opérateur ${operateurUpdated.nom} a bien été modifié.`
    res.json(success(message, operateurUpdated))
   });

appTuto.delete('/api/operateurs/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const operateurDeleted = operateurs.find(operateur => operateur.id === id)
    operateurs = operateurs.filter(operateur => operateur.id !== id)
    const message = `L'opérateur ${operateurDeleted.nom} a bien été supprimé.`
    res.json(success(message, operateurDeleted))
  });


//**************** Trajets ********************* */

// On retourne la liste des trajets au format JSON, avec un message :

   


appTuto.post('/api/trajets', (req, res) => {
    const id = getUniqueId(trajets)
    const idMalade = getUniqueId(trajets)
    const idDemande = getUniqueId(trajets)
    const idOper = getUniqueId(trajets)
    const idCourse = getUniqueId(trajets)
    const trajetCreated = { ...req.body, ...{id: id,idMalade: idMalade,idDemande: idDemande, idOper:idOper,idCourse:idCourse, created: new Date()}}
    trajets.push(trajetCreated)
    const message = `Le trajet ${trajetCreated.id} a bien été crée.`
    res.json(success(message, trajetCreated))
  })


appTuto.put('/api/trajets/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const trajetUpdated = { ...req.body, id: id }
    trajets = trajets.map(trajet => {
     return trajet.id === id ? trajetUpdated : trajet
    })
     
    const message = `Le trajet ${trajetUpdated.id} a bien été modifié.`
    res.json(success(message, trajetUpdated))
   });

appTuto.delete('/api/trajets/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const trajetDeleted = trajets.find(trajet => trajet.id === id)
    trajets = trajets.filter(trajet => trajet.id !== id)
    const message = `Le trajet ${trajetDeleted.id} a bien été supprimé.`
    res.json(success(message, trajetDeleted))
  });

//**************** Courses ********************* */
// On retourne la liste des courses au format JSON, avec un message :

appTuto.get('/api/courses', (req, res) => {
    const message = 'La liste des courses a bien été récupérée.'
    res.json(success(message, courses)) 
  })
   
appTuto.get('/api/courses/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const course = courses.find(course => course.id === id)
    const message = 'Une course a bien été trouvé.'
    res.json(success(message, course))
  })

appTuto.post('/api/courses', (req, res) => {
    const id = getUniqueId(courses)
    const idTrajet = getUniqueId(courses)
   
    const courseCreated = { ...req.body, ...{id: id,idTrajet: idTrajet, created: new Date()}}
    courses.push(courseCreated)
    const message = `La course ${courseCreated.id} a bien été crée.`
    res.json(success(message, courseCreated))
  })


appTuto.put('/api/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const courseUpdated = { ...req.body, id: id }
    courses = courses.map(course => {
     return course.id === id ? courseUpdated : course
    })
     
    const message = `La course ${courseUpdated.id} a bien été modifié.`
    res.json(success(message, courseUpdated))
   });

appTuto.delete('/api/courses/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const courseDeleted = courses.find(course => course.id === id)
    courses = courses.filter(course => course.id !== id)
    const message = `La course ${courseDeleted.id} a bien été supprimé.`
    res.json(success(message, courseDeleted))
  });


//**************** FactureCNAS********************* */
//Remarque: factures c'est factures de la CNAS, facturesop c'est les factures fournies par l'opérateur
// On retourne la liste des facturesCNAS au format JSON, avec un message :
appTuto.get('/api/factures', (req, res) => {
    const message = 'La liste des factures a bien été récupérée.'
    res.json(success(message, factures)) 
  })
/*  
appTuto.get('/api/factures/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const facture = factures.find(facture => facture.id === id)
    const message = 'Une facture a bien été trouvée.'
    res.json(success(message, facture))
  })
*/
appTuto.post('/api/factures', (req, res) => {
    const id = getUniqueId(factures)
    const idTrajet = getUniqueId(factures)
    const idOper = getUniqueId(factures)
   
    const factureCreated = { ...req.body, ...{id: id,idTrajet: idTrajet,idOper:idOper, created: new Date()}}
    factures.push(factureCreated)
    const message = `La facture ${factureCreated.id} a bien été crée.`
    res.json(success(message, factureCreated))
  })


appTuto.put('/api/factures/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const factureUpdated = { ...req.body, id: id }
    factures = factures.map(facture => {
     return facture.id === id ? factureUpdated : facture
    })
     
    const message = `La facture ${factureUpdated.id} a bien été modifié.`
    res.json(success(message, factureUpdated))
   });

appTuto.delete('/api/factures/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const factureDeleted = factures.find(facture => facture.id === id)
    factures = factures.filter(facture => facture.id !== id)
    const message = `La facture ${factureDeleted.id} a bien été supprimé.`
    res.json(success(message, factureDeleted))
  });



//**************** Facture Opérateur********************* */
// On retourne la liste des factures des opérateurs au format JSON, avec un message :
appTuto.get('/api/facturesOP', (req, res) => {
  const message = 'La liste des factures a bien été récupérée.'
  res.json(success(message, facturesOP)) 
})
/*  
appTuto.get('/api/factures/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const facture = factures.find(facture => facture.id === id)
  const message = 'Une facture a bien été trouvée.'
  res.json(success(message, facture))
})
*/
appTuto.post('/api/facturesOP', (req, res) => {
  const id = getUniqueId(facturesOP)
  const idTrajet = getUniqueId(facturesOP)
  const idOper = getUniqueId(facturesOP)
 
  const factureOPCreated = { ...req.body, ...{id: id,idTrajet: idTrajet,idOper:idOper, created: new Date()}}
  facturesOP.push(factureOPCreated)
  const message = `La facture ${factureOPCreated.id} a bien été crée.`
  res.json(success(message, factureOPCreated))
})


appTuto.put('/api/facturesOP/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const factureOPUpdated = { ...req.body, id: id }
  facturesOP = facturesOP.map(factureOP => {
   return factureOP.id === id ? factureOPUpdated : factureOP
  })
   
  const message = `La facture ${factureOPUpdated.id} a bien été modifié.`
  res.json(success(message, factureOPUpdated))
 });

appTuto.delete('/api/facturesOP/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const factureOPDeleted = facturesOP.find(factureOP => factureOP.id === id)
  facturesOP = facturesOP.filter(factureOP => factureOP.id !== id)
  const message = `La facture ${factureOPDeleted.id} a bien été supprimé.`
  res.json(success(message, factureOPDeleted))
});


//****************************Calcul de la facture de la CNAS et l'écart entre celle ci et la facture de l'opérateur *************** */

appTuto.get('/api/factures/:id', (req, res) => {
  const id = parseInt(req.params.id)
  let km = factures.find(km => km.id === id).kmCNAS
  let type = operateurs.find(type => type.id === id).vehicule
  let attente = trajets.find(attente => attente.id === id).dureeAttente
  let medecin = operateurs.find(medecin => medecin.id === id).boolMedecin
  let at = trajets.find(at => at.id === id).boolAttente
  let mntOP = facturesOP.find(mntOP => mntOP.id === id).montantOP
 
  const message = 'Une facture a bien été trouvée.'
  const message2 = 'aucun écart constaté.'
  const message3 = 'Il existe un écart.'
  //res.json(success(message, facture))
  let resultkm;
  let montant;
  if (type ="Embulance sanitaire" ) {
    if (km <= 100)
     { if (at ==1)
        {
          resultkm = km*18 + 25*(attente/0.25);
        }
        else {
          resultkm = km*18;
        }
      
     }
   if (km > 100)
     {
      if (at ==1)
        {
          resultkm = km*13.5 + 25*(attente/0.25);
        }
        else {
          resultkm = km*13.5;
        }
     }

  } 

if (type ="Véhicule sanitaire léger") {
    if (km <= 100)
     {
      if (at ==1)
      {
        resultkm = km*12 + 25*(attente/0.25);
      }
      else {
        resultkm = km*12;
      }
     }
    if (km > 100)
    {
      if (at ==1)
        {
          resultkm = km*9 + 25*(attente/0.25);
        }
        else {
          resultkm = km*9;
        }
    }
  
  } 

if (type ="Embulance sanitaire" && medecin ==1 ) {
      if (km <= 100)
       {
        if (at ==1)
        {
          resultkm = km*27 + 25*(attente/0.25);
        }
        else {
          resultkm = km*27;
        }
       }
      if (km > 100)
      {
        if (at ==1)
        {
          resultkm = km*19 + 25*(attente/0.25);
        }
        else {
          resultkm = km*19;
        }
      }
    //resultkm = `Le montant est ${km*2} .`;
  } 
  
  montant = `Le montant est ${resultkm} .`;
  res.json(success(message, montant))
  let ecart = resultkm - mntOP;
  let r = `L'écart est ${ecart} .`;
  if (ecart == 0)
        {
          res.json(success(message2))
        }
        else {
          res.json(success(message3, r))
        }

}


)






appTuto.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))
