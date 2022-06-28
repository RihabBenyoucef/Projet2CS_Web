module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Trajet', {
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
      idDemande: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        // autoIncrement: true
      },
      idOper: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        // autoIncrement: true
      },
      idCourse: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        // autoIncrement: true
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false
      },
      boolAttente: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      dureeAttente: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }