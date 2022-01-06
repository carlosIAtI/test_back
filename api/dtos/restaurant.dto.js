const { v4: uuidv4 } = require('uuid');
class RestaurantDto {
    uuid = uuidv4();
    nomb_restaurant = null;
    correo = null;
    reseña = null;
   }
   
   module.exports = RestaurantDto;