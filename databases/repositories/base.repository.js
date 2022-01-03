class BaseRepository {
    constructor(db, entity) {
      this._db = db;
      this.entity = entity;
    }
  
    getAll() {
      return this._db[this.entity].findAll();//select * from public."Users";
    }
  
    get(id) {
      return this._db[this.entity].findOne({ where: { id } });//select * from public."Users" where id = id limit 1;
    }
  
  
    getUUid(uuid) {
      return this._db[this.entity].findOne({ where: { uuid:uuid } });//select * from public."Users" where uuid = uuid limit 1;
    }
  
    create(entity) {
      return this._db[this.entity].create(entity);//insert into public."Users" VALUES(1,'nombre','apellido','email;')
    }
  
    update(id, entity) {
      delete entity.createdAt;
      delete entity.updatedAt;
      return this._db[this.entity].update(entity, { where: { id } });//UPDATE public."Users" set name = name where id = id ; 
    }
  
    delete(id) {
      return this._db[this.entity].destroy({ where: { id } });//DELTE public."Users" where id = id 
    }
  }
  
  module.exports = BaseRepository;
  