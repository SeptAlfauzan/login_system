import DB from "../configs/DB";
const Database = require("../configs/DB");
import { Sequelize, DataTypes, Model, BuildOptions } from "sequelize";

interface Mahasiswa extends Model {
  nama: Text;
  nim: bigint;
  password: Text;
}

type MahasiswaStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): Mahasiswa;
};

const Mahasiswa = <MahasiswaStatic>DB.define("mahasiswa", {
  nama: {
    type: DataTypes.TEXT,
  },
  nim: {
    type: DataTypes.BIGINT,
  },
  password: {
    type: DataTypes.TEXT,
  },
});

export default Mahasiswa;
