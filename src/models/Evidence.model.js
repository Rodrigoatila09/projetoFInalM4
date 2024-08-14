import { DataTypes } from "sequelize";
import { database } from "../database/connection.db.js";

export const Evidence = database.define("Evidence", {
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
    allowNull: true
  },
  evidenceContent: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
  resolutionDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  resolutionDetails: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
});

database
  .sync()
  .then(() => {
    console.log("Database synchronized successfully.");
  })
  .catch((err) => {
    console.error("Error synchronizing the database:", err);
  });
