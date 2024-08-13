import { DataTypes } from 'sequelize';
import { database } from './database/connection.db.js';


export const Complaint = database.define('Complaint',
    {
      id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4
      },
    }
  );