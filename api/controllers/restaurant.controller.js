const mapper = require("automapper-js");
const { RoleDto } = require("../dtos");
class RestaurantController { 
     
    constructor({ RoleService }){
        this._role_service = RoleService;
    }


    async getALL(req,res){
        try {
            let roles = await this._role_service.getAll();
            roles = roles.map(role => mapper(RoleDto, role));
            return res.status(201).send({
              status: "ok",
              msg: "Roles",
              results: roles
            }); 
            
        } catch (error) {
            console.log(error);
            return res.status(404).send({status:"error",code: 0 , msg: "database error"});  
        }
        }

    async create(req,res){
        try {
            const { body } = req;
            let role = await this._role_service.create(body);
            return res.status(201).send({
              status: "ok",
              msg: "create role",
              result: role
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
        let role = null;
        role = await this._role_service.getUUid(uuid);
        if(!role)
           return res.status(404).send({status:"error",code: 0 , msg: "user doesn't exist"});
        
        await this._role_service.update(role.id,body);
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
        let role = null;
        role = await this._role_service.getUUid(uuid);
        if(!role)
           return res.status(404).send({status:"error",code: 0 , msg: "role doesn't exist"});
        
        await this._role_service.delete(role.id);
        return res.status(201).send({
            status: "ok",
            msg: "delete role"
          });   

            
        } catch (error) {
            return res.status(404).send({status:"error",code: 0 , msg: "database error"});  
        }
    }



    async getRole(req,res){
        try {

            const { uuid } = req.params;
            let role = null;
            role = await this._role_service.getUUid(uuid);
            if(!role)
               return res.status(404).send({status:"error",code: 0 , msg: "role doesn't exist"});
            return res.status(201).send({
              status: "ok",
              msg: "Role ",
              result: role
            }); 
            
        } catch (error) {

            return res.status(404).send({status:"error",code: 0 , msg: "database error"});  
        }
        }



}

module.exports = RestaurantController;