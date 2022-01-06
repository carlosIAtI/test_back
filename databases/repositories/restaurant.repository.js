const BaseRepository = require("./base.repository");

class RestaurantRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Restaurant");
    this._db = db;
    this._entity = "Restaurant";
  }
}
 
module.exports = RestaurantRepository;
