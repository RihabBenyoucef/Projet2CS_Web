module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Operateur', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      prenom: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      mdp: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      adresseOper: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      numTelephone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
      adresse: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      NSS: {
        type: DataTypes.INTEGER,
        allowNull: false,
      
      },
      courses: {
        type: DataTypes.STRING,
        allowNull: false
      },
      boolMateriel: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
      },
      vehicule: {
        type: DataTypes.STRING,
        allowNull: false
      },
      boolMedecin: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
      }


    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }