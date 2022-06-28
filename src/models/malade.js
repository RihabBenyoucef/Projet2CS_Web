module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Malade', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: false
      },
      prenom: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      mdp: {
        type: DataTypes.STRING,
        allowNull: false
      },
      numTelephone: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      adresse: {
        type: DataTypes.STRING,
        allowNull: false
      },
      NSS: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      dateNaiss: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dateInscription: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }