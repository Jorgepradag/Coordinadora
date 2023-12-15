import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class guias extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numero_guia: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'guias',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "guias_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
