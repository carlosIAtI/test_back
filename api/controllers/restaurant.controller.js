const mapper = require("automapper-js");
const { RestaurantDto } = require("../dtos");
class RestaurantController { 
     
    constructor({ RestaurantService }){
        this._restaurant_service = RestaurantService;
    }


    async getALL(req,res){
        try {
            let restaurants = await this._restaurant_service.getAll();
            restaurants = restaurants.map(role => mapper(RestaurantDto, restaurant));
            return res.status(201).send({
              status: "ok",
              msg: "Restaurants",
              results: restaurants
            }); 
            
        } catch (error) {
            console.log(error);
            return res.status(404).send({status:"error",code: 0 , msg: "database error"});  
        }
        }

    async create(req,res){
        try {
            const { body } = req;
            let restaurant = await this._restaurant_service.create(body);
            return res.status(201).send({
              status: "ok",
              msg: "create restaurant",
              result: restaurant
            }); 
            
        } catch (error) {
             console.log(error);
            return res.status(404).send({status:"error",code: 0 , msg: "database error"});  
        }
    }
    
    
    async update(req,res){
        try {
        const { body } = req;
        const { uuid } = req.params;
        let restaurant = null;
        restaurant = await this._restaurant_service.getUUid(uuid);
        if(!restaurant)
           return res.status(404).send({status:"error",code: 0 , msg: "restaurant doesn't exist"});
        
        await this._restaurant_service.update(restaurant.id,body);
        return res.status(201).send({
            status: "ok",
            msg: "updated update"
          });   

            
        } catch (error) {
            console.log(error);
            return res.status(404).send({status:"error",code: 0 , msg: "database error"});  
        }
    }


    async delete(req,res){
        try {
        const { uuid } = req.params;
        let restaurant = null;
        restaurant = await this._restaurant_service.getUUid(uuid);
        if(!restaurant)
           return res.status(404).send({status:"error",code: 0 , msg: "restaurant doesn't exist"});
        
        await this._restaurant_service.delete(restaurant.id);
        return res.status(201).send({
            status: "ok",
            msg: "delete restaurant"
          });   

            
        } catch (error) {
            return res.status(404).send({status:"error",code: 0 , msg: "database error"});  
        }
    }



    async getRestaurant(req,res){
        try {

            const { uuid } = req.params;
            let restaurant = null;
            restaurant = await this._restaurant_service.getUUid(uuid);
            if(!restaurant)
               return res.status(404).send({status:"error",code: 0 , msg: "restaurant doesn't exist"});
            return res.status(201).send({
              status: "ok",
              msg: "Role ",
              result: restaurant
            }); 
            
        } catch (error) {

            return res.status(404).send({status:"error",code: 0 , msg: "database error"});  
        }
        }



}

module.exports = RestaurantController;