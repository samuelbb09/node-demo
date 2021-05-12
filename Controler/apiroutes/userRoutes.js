const express = require("express");
const router = express.Router();
const Userblueprint = require("../../Model/UsersModel");
const Sequelize = require("sequelize");
const user = Userblueprint(global.conn,Sequelize)

global.conn.sync( { force: false}).then( () => {
    console.log("tablas sincronizadas");
}, (error) => console.log(error.message));

router.get("/",async (req,res) => {
    try{
        if(req.query.id){
            const id = req.query.id ;
            const usuarios = await user.findAll({where: {id : id}});
            if(usuarios.length === 0){
                res.json({error: "User dont exists"})
            }else{
                res.json(usuarios);
            }
            
        }else{
            const usuarios = await user.findAll();
            res.json(usuarios);
        }
        
    }catch(error){
        console.log(error.message);
    }
})

router.post("/publish",async (req,res) => {
    const newuser = await user.create({nombre: req.body.name})
    res.json(newuser);
})

router.put("/edit",async (req,res) => {
    
     const record = await user.update({nombre : req.body.name},{where :{id: 2}});
     res.json({message : "all clear"});
    
})

router.delete("/delete",async (req,res) => {
    const record = await user.destroy({where :{id: 2}});
    res.json({message : "number of deleted records is: " + record});
})


module.exports = router;