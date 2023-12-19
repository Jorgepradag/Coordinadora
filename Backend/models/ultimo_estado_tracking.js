import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ultimo_estado_tracking extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    codigo: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ultimo_estado_tracking',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ultimo_estado_tracking_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
