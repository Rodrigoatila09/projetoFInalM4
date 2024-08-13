import { DataTypes } from "sequelize";
import { database } from "../database/connection.db.js";

export const Whistleblower = database.define("Whistleblower", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  isAnonymous: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
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
