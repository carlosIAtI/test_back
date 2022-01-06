const { asClass , createContainer , asFunction , asValue} = require("awilix");
 
//app start
const StartUp = require('./startup');
const Server = require('./server');
const config = require('../config/environments');

// routes system
const Routes = require('../api/routes');
const RestaurantRoutes = require("./routes/restaurant.route");


const container = createContainer();

//databases
const db = require("../databases/models");

//repositories

const { RestaurantRepository, } = require("../databases/repositories")

//controllers
const { RestaurantController,  } = require('../api/controllers');

//business
const { RestaurantBusiness,  } = require('../domain');

//services 
const { RestaurantService ,  } = require('../services');


//Middlewrares

//const { Middleware } = require('../api/middlewares');
 

container.register({
  app: asClass(StartUp).singleton(),
  router: asFunction(Routes).singleton(),
  server: asClass(Server).singleton(),
  //Middleware: asClass(Middleware).singleton,
  RestaurantController: asClass(RestaurantController).singleton(),
  RestaurantRoutes: asFunction(RestaurantRoutes).singleton(),


  
})
.register({
  config: asValue(config)
})
.register({
  db: asValue(db),
  
})
.register({
  //services
  RestaurantService: asClass(RestaurantService).singleton(),
  
})
.register({
  //repositories 
  RestaurantRepository: asClass(RestaurantRepository).singleton(),

})
.register({
  //business
  RestaurantBusiness: asClass(RestaurantBusiness).singleton(),

}) 
;

module.exports = container;
