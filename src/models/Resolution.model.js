import { DataTypes } from "sequelize";
import { database } from "../database/connection.db.js";
import { ResponsibleAuthority } from "../models/ResponsibleAuthority.model.js"

export const Resolution = database.define("Resolution", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  responsibleAuthorityId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: ResponsibleAuthority,
      key:'id',
    }
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
  status: {
    type: DataTypes.ENUM('Pending', 'Resolved', 'Closed'),
    defaultValue: 'Pending',
    allowNull: false,
  },
});


