const container = require('./api/container');

const aplication = container.resolve("app");
const db = container.resolve("db");

aplication
  .start()
  .then(async ()=>{
   await db.sequelize.sync();  
  }).catch(err => {
    console.log(err);
    process.exit();
  });
