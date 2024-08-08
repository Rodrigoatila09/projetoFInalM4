import { DataTypes } from 'sequelize';
import { database } from './database/connection.db.js';


export const Message = database.define('Message',
    {
      id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4
      },
    }
  );