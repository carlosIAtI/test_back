const BaseRepository = require("./base.repository");

class RestaurantRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "restaurant");
    this._db = db;
    this._entity = "restaurant";
  }
}
 
module.exports = RestaurantRepository;
