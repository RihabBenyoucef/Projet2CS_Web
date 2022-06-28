module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Remboursement', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idOperateur: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        // autoIncrement: true
      },
      etat: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false
      },
      montant: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }