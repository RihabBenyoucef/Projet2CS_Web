module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Feedback', {
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
      date: {
        type: DataTypes.STRING,
        allowNull: false
      },
      etat: {
        type: DataTypes.STRING,
        allowNull: false
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }