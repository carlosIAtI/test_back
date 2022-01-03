const { v4: uuidv4 } = require('uuid');
class Restaurant {
    id = 0;
    uuid = uuidv4();
    nomb_restaurant = null;
    correo = null;
    reseña = null;
   }
   
   module.exports = Restaurant;