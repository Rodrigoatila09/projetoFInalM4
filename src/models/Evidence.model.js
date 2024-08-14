import { DataTypes } from "sequelize";
import { database } from "../database/connection.db.js";
import { Resolution } from "./Resolution.model.js";
import { ResponsibleAuthority } from "./ResponsibleAuthority.model.js";

export const Evidence = database.define("Evidence", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  resolutionId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: Resolution,
      key: "id",
    },
  },
  responsibleAuthorityId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: ResponsibleAuthority,
      key: "id",
    },
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


