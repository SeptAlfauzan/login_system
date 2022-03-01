import DB from "../configs/DB";
const Database = require("../configs/DB");
import { Sequelize, DataTypes, Model, BuildOptions } from "sequelize";

interface Mahasiswa extends Model {
  username: Text;
  password: Text;
}

type MahasiswaStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): Mahasiswa;
};

const Mahasiswa = <MahasiswaStatic>DB.define("mahasiswa", {
  username: {
    type: DataTypes.TEXT,
  },
  password: {
    type: DataTypes.TEXT,
  },
});

export default Mahasiswa;
