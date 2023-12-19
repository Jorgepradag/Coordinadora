import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class cliente extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nit: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    razon_social: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    div: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cliente',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cliente_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
