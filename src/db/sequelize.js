const { Sequelize, DataTypes } = require('sequelize')
const UserModel=require('../models/user')
const OperateurModel=require('../models/operateur')
const DemandeModel=require('../models/demande')
const MaladeModel=require('../models/malade')
const TrajetModel=require('../models/trajet')
const CourseModel=require('../models/course')
const FactureModel=require('../models/facture')
const FactureOPModel=require('../models/factureOP')




const operateurs = require('./mock-operateurs')
const bcrypt = require('bcrypt')

  
const sequelize = new Sequelize(
'postgres', 
'postgres', 
'openpgpwd', {
  host: 'localhost',
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false,

})
  

const Operateur = OperateurModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)
const Demande= DemandeModel(sequelize,DataTypes)
const Malade=MaladeModel(sequelize,DataTypes)
const Trajet=TrajetModel(sequelize,DataTypes)
const Course=CourseModel(sequelize,DataTypes)
const Facture=FactureModel(sequelize,DataTypes)
const FactureOP=FactureOPModel(sequelize,DataTypes)


  
const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    operateurs.map(operateur => {
      Operateur.create({
        nom: operateur.nom,
        prenom: operateur.prenom,
        email: operateur.email,
        mdp: operateur.mdp,
        adresseOper: operateur.adresseOp,
        numTelephone: operateur.numTeleph,
        adresse: operateur.adresse,
        NSS:operateur.NSS,
        courses:operateur.courses,
        boolMateriel: operateur.boolMateriel,
        vehicule:operateur.vehicule,
        boolMedecin: operateur.boolMedecin,
        // types: pokemon.types.join()
      }).then(operateur => console.log(operateur.toJSON()))
    })
    // bcrypt.hash ('Khaled', 10)
    // .then(hash=>User.create({username:'Khaled', password:hash}))
    // .then(user=> console.log(user.toJSON()))
    console.log('La base de donnée a bien été initialisée !')
  })
}
  
module.exports = { 
  initDb,User, Operateur, Demande, Malade,Trajet,Course, Facture, FactureOP
}