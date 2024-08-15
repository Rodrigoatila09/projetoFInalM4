import { Sequelize } from "sequelize";

export const database = new Sequelize("postgresql://postgres.ddleqszawxexidqdwxfa:r1L9usYvIX4lGUQs@aws-0-us-east-1.pooler.supabase.com:6543/postgres", {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false,
});
 

export const connection = async () => {
  try{
    await database.authenticate()
    await database.sync()
    return console.log('Connection has been established successfully.')
  }catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}




