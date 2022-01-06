const { Router } = require("express");
module.exports = function({ RestaurantController }) {
  const router = Router();

  router.get("/", RestaurantController.getALL.bind(RestaurantController));
  router.post("/", RestaurantController.create.bind(RestaurantController));
  router.put("/:uuid",RestaurantController.update.bind(RestaurantController));
  router.delete("/:uuid",RestaurantController.delete.bind(RestaurantController)); 
  return router;
};
