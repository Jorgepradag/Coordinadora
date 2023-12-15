import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class unidadesguia extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numeroguia: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    fecharecogida: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fechaentrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estadotracking: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    remitente_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'remitente',
        key: 'id'
      }
    },
    destinatario_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'destinatario',
        key: 'id'
      }
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cliente',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'unidadesguia',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "unidadesguia_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
