module.exports ={
PORT: process.env.PORT,
DB:{
   user: process.env.DB_USER,
   password: process.env.DB_PASS,
   database: process.env.DB_NAME,
   host: process.env.DB_HOST,
   dialect: "postgres",
   logging: false
}

}
