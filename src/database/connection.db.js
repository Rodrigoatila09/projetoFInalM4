import { Sequelize } from "sequelize";

export const database = new Sequelize("postgresql://postgres.ddleqszawxexidqdwxfa:r1L9usYvIX4lGUQs@aws-0-us-east-1.pooler.supabase.com:6543/postgres", {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
});
 

export const connection = async () => {
  try{
    await database.authenticate()
    await database.sync({ logging:false })
    return console.log('Connection has been established successfully.')
  }catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}





