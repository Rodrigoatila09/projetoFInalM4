import { DataTypes } from "sequelize";
import { database } from "../database/connection.db.js";

export const Resolution = database.define("Resolution", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  resolutionId: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  responsibleAuthorityId: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  evidenceContent: {
    type: DataTypes.BLOB,
    allowNull: false,
  },
  resolutionDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  resolutionDetails: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

database
  .sync()
  .then(() => {
    console.log("Resolution table synchronized successfully.");
  })
  .catch((err) => {
    console.error("Error synchronizing the Resolution table:", err);
  });
