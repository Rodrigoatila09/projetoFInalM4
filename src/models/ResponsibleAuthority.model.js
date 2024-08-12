import { DataTypes } from "sequelize";
import { database } from "../database/connection.db.js";

export const ResponsibleAuthority = database.define("ResponsibleAuthority", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  nameAuthority: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  typeAuthority: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  activity: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  adress: {
    type: DataTypes.TEXT(256),
    allowNull: true,
  },
  email: {
    type: DataTypes.TEXT(200),
    allowNull: true,
  },
  phone: {
    type: DataTypes.TEXT(15),
    allowNull: true,
  },
});

database
  .sync()
  .then(() => {
    console.log("Database synchronized successfully.");
  })
  .catch((err) => {
    console.error("Error synchronizing the database:", err);
  });
