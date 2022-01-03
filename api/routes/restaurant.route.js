const { Router } = require("express");
module.exports = function({ RestaurantController }) {
  const router = Router();

  router.get("/", RestaurantController.getALL.bind(RestaurantController));
 
  return router;
};
