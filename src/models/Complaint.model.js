import { DataTypes } from 'sequelize';
import { database } from '../database/connection.db.js';
// import { Whistleblower } from './Whistleblower.model.js';
// import { Evidence } from './Evidence.model.js';

export const Message = database.define('Message',
    {
      id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4
      },
    }
  );

  export const Complaint = database.define("Complaint", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: false,
    }

    // evidencesID: {
    //   type: DataTypes.UUIDV4,
    //   allowNull: false,
    // },
    // whistleblowerID: {
    //   type: DataTypes.UUIDV4,
    //   allowNull: false,
    // },
  });

// Complaint.belongsTo(Whistleblower,{ foreignKey: 'whistleblowerID'})
// Complaint.belongsTo(Evidence,{ foreignKey: 'evidencesID'})
// Complaint.belongsTo(Whistleblower,{ foreignKey: 'whistleblowerID'})