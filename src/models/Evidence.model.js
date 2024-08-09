import { DataTypes } from "sequelize";
import { database } from "../database/connection.db.js";

export const Evidence = database.define("Evidence", {
  evidenceId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    autoIncrement: true,
  },
  resolutionId: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  responsibleAuthorityId: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  evidenceContent:{
    type: DataTypes.BLOB,
    allowNull: false,

  },
  resolutionDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  resolutionDetails: {
    type: DataTypes.TEXT(20),
    allowNull: true,
  },

});


database.sync()
  .then(() => {
    console.log('Database synchronized successfully.');
  })
  .catch(err => {
    console.error('Error synchronizing the database:', err);
  });