import { DataTypes } from 'sequelize';
import { database } from '../database/connection.db.js';

export const CategoryReport = database.define('CategoryReport', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: true,
});
