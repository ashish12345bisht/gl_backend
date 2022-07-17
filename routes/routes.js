const express=require("express");
const router=express.Router();
var users=require('../data/users')


router.get('/',(req,res)=>{
    console.log("homepage run");
    res.render('index')
})

router.get('/:id',(req,res)=>{
    let user=users.find(item=>item.userId==req.params.id);
    res.render('userUpdate',{id:req.params.id,name:user.name,age:user.age})
})

router.post('/:id/update',(req,res)=>{
    let newUser=req.body;
    users.forEach(user=>{
        if(user.userId==newUser.id){
            user.name=newUser.name
            user.age=newUser.age
        }
    })
    res.send('Done');
    // next();
})

module.exports=router