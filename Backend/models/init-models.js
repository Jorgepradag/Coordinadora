import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _cliente from  "./cliente.js";
import _destinatario from  "./destinatario.js";
import _estados_tracking from  "./estados_tracking.js";
import _guias from  "./guias.js";
import _remitente from  "./remitente.js";
import _unidadesguia from  "./unidadesguia.js";

export default function initModels(sequelize) {
  const cliente = _cliente.init(sequelize, DataTypes);
  const destinatario = _destinatario.init(sequelize, DataTypes);
  const estados_tracking = _estados_tracking.init(sequelize, DataTypes);
  const guias = _guias.init(sequelize, DataTypes);
  const remitente = _remitente.init(sequelize, DataTypes);
  const unidadesguia = _unidadesguia.init(sequelize, DataTypes);

  unidadesguia.belongsTo(cliente, { as: "cliente", foreignKey: "cliente_id"});
  cliente.hasMany(unidadesguia, { as: "unidadesguia", foreignKey: "cliente_id"});
  unidadesguia.belongsTo(destinatario, { as: "destinatario", foreignKey: "destinatario_id"});
  destinatario.hasMany(unidadesguia, { as: "unidadesguia", foreignKey: "destinatario_id"});
  unidadesguia.belongsTo(remitente, { as: "remitente", foreignKey: "remitente_id"});
  remitente.hasMany(unidadesguia, { as: "unidadesguia", foreignKey: "remitente_id"});

  return {
    cliente,
    destinatario,
    estados_tracking,
    guias,
    remitente,
    unidadesguia,
  };
}
