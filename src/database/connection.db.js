import { Sequelize } from "sequelize";

export const database = new Sequelize("postgresql://postgres.ddleqszawxexidqdwxfa:r1L9usYvIX4lGUQs@aws-0-us-east-1.pooler.supabase.com:6543/postgres", {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
});
 


database.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

