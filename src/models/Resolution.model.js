import { DataTypes } from "sequelize";
import { database } from "../database/connection.db.js";
import { ResponsibleAuthority } from "./ResponsibleAuthority.model.js"

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
      key: "id",
    },
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
    type: DataTypes.ENUM("Pendente", "Em processo", "Encerrado"),
    defaultValue: "Pendente",
    allowNull: false,
  },
});
