const BaseBusiness = require("./base.business");
const { Restaurant } = require("./models");
class RestaurantBusiness extends BaseBusiness{
  constructor({ RestaurantRepository }){
    super(RestaurantRepository,Restaurant);
  }
  
}
module.exports = RestaurantBusiness;  