const BaseService = require("./base.service");
class RestaurantService extends BaseService{
    constructor({ RestaurantBusiness }){
        super(RestaurantBusiness);
    }
}

module.exports = RestaurantService;