import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'gestion_ecole',  
  'root',           
  '',               
  {
    host: 'localhost',
    dialect: 'mysql' 
  }
);

export default sequelize;