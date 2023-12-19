import { Sequelize } from 'sequelize';

const conexion = new Sequelize(
  'guias2',
  'postgres',
  '1968',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

export default conexion;