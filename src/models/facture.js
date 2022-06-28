module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Facture', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idTrajet: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        // autoIncrement: true
      },
      idOper: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        // autoIncrement: true
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false
      },
      kmCNAS: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }