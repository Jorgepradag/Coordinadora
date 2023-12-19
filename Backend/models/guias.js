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
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "guias_numero_guia_key"
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cliente',
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
    remitente_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'remitente',
        key: 'id'
      }
    },
    ultimo_estado_tracking_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ultimo_estado_tracking',
        key: 'id'
      }
    },
    unidad_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidad',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'guias',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "guias_numero_guia_key",
        unique: true,
        fields: [
          { name: "numero_guia" },
        ]
      },
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
