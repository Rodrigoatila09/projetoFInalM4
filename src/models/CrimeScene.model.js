import { DataTypes } from "sequelize";
import { database } from "../database/connection.db.js";

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
    },
    responsibleAuthorityId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    evidence: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    resolutionId: {
      type: DataTypes.ENUM('Under Investigation', 'Solved', 'Closed'),
      allowNull: false,
      defaultValue: 'Under Investigation',
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
