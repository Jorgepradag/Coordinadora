import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class unidad extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    total: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    numero_unidad: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    referencia_detalle: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    etiqueta1d: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    etiqueta2d: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    referencia: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fecha_hora_recogida: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_hora_entrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'unidad',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "unidad_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
