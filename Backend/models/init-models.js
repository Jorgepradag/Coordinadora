import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _cliente from  "./cliente.js";
import _destinatario from  "./destinatario.js";
import _guias from  "./guias.js";
import _remitente from  "./remitente.js";
import _ultimo_estado_tracking from  "./ultimo_estado_tracking.js";
import _unidad from  "./unidad.js";

export default function initModels(sequelize) {
  const cliente = _cliente.init(sequelize, DataTypes);
  const destinatario = _destinatario.init(sequelize, DataTypes);
  const guias = _guias.init(sequelize, DataTypes);
  const remitente = _remitente.init(sequelize, DataTypes);
  const ultimo_estado_tracking = _ultimo_estado_tracking.init(sequelize, DataTypes);
  const unidad = _unidad.init(sequelize, DataTypes);

  guias.belongsTo(cliente, { as: "cliente", foreignKey: "cliente_id"});
  cliente.hasMany(guias, { as: "guia", foreignKey: "cliente_id"});
  guias.belongsTo(destinatario, { as: "destinatario", foreignKey: "destinatario_id"});
  destinatario.hasMany(guias, { as: "guia", foreignKey: "destinatario_id"});
  guias.belongsTo(remitente, { as: "remitente", foreignKey: "remitente_id"});
  remitente.hasMany(guias, { as: "guia", foreignKey: "remitente_id"});
  guias.belongsTo(ultimo_estado_tracking, { as: "ultimo_estado_tracking", foreignKey: "ultimo_estado_tracking_id"});
  ultimo_estado_tracking.hasMany(guias, { as: "guia", foreignKey: "ultimo_estado_tracking_id"});
  guias.belongsTo(unidad, { as: "unidad", foreignKey: "unidad_id"});
  unidad.hasMany(guias, { as: "guia", foreignKey: "unidad_id"});

  return {
    cliente,
    destinatario,
    guias,
    remitente,
    ultimo_estado_tracking,
    unidad,
  };
}
