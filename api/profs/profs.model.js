import { DataTypes } from 'sequelize';
import sequelize from '../../config/dataBase.js';

const Prof = sequelize.define('Prof', {
id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
nom: {
    type: DataTypes.STRING,
    allowNull: false
},
prenom: {
    type: DataTypes.STRING,
    allowNull: false
},
email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
},
password: {
    type: DataTypes.STRING,
    allowNull: false
}
});

export default Prof;