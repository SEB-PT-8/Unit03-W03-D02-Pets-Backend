const router = require('express').Router();
const Pet = require('../models/pet')

router.post('/',async(req,res)=>{
    const createdPet = await Pet.create(req.body)
})




module.exports = router