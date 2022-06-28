module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Course', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idOper: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        // autoIncrement: true
      },
      idTrajet: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        // autoIncrement: true
      },
      depart: {
        type: DataTypes.STRING,
        allowNull: false
      },
      arrivee: {
        type: DataTypes.STRING,
        allowNull: false
      },
      km: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }