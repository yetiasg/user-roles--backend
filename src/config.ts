import dotenv from 'dotenv'
dotenv.config()

export const config = {
  server:{
    PORT: process.env.PORT
  },
  database:{
    DB_URI: 'mongodb://localhost:27017',
    DB_NAME: 'userRoles'
  }
}