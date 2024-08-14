import { DataTypes } from "sequelize";
import { database } from "../database/connection.db.js";
import { Whistleblower } from "./Whistleblower.model.js";
import { ResponsibleAuthority } from "./ResponsibleAuthority.model.js";

export const CrimeScene = database.define("CrimeScene", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  location: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  dateOfCrime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  whistleblowerId: {
    type: DataTypes.STRING(100),
    allowNull: true,
    references: {
      model: Whistleblower,
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
});
