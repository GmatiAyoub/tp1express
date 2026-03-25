import { DataTypes, INTEGER } from "sequelize";
import sequelize from "../../config/dataBase";
const Etudiant = sequelize.define('Etudiant',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nom:{
        type:DataTypes.STRING,
        allowNull:false
    },
    prenom:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:true
    }
});
export default Etudiant;