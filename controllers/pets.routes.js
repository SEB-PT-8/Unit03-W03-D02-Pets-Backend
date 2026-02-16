const router = require('express').Router();
const Pet = require('../models/pet')

router.post('/',async(req,res)=>{
    try{
    const createdPet = await Pet.create(req.body)
    res.status(201).json(createdPet)

    }
    catch(err){
        console.log(err)
        res.status(500).json({err:err.message})
    }
})




module.exports = router