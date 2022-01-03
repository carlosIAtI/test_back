const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

module.exports = function({  RestaurantRoutes, }) {
  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
 
  
    
  apiRoute.use("/restaurant", RestaurantRoutes);

  
  router.use("/api", apiRoute);

  return router;
};
