module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Demande', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idMalade: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        // autoIncrement: true
      },
      nomStructureSani: {
        type: DataTypes.STRING,
        allowNull: false
      },
      adresseStructureSani: {
        type: DataTypes.STRING,
        allowNull: false
      },
      documentDemande: {
        type: DataTypes.STRING,
        allowNull: false
      },
      etat: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dateDemande: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }