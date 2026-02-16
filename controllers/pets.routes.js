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


router.get('/', async (req,res)=>{
    try{
        const foundPets = await Pet.find()
        res.status(200).json(foundPets)
    }
    catch(err){
        console.log(err)
        res.status(500).json({err:err.message})
    }
})

router.get('/:petId', async (req,res)=>{
    try{
        const foundPet = await Pet.findById(req.params.petId)
        if(!foundPet){
            res.status(404)
            throw new Error('Pet Not Found with Id')
        }
        res.status(200).json(foundPet)
    }
    catch(err){
        if(err.statusCode===404){
            return res.status(404).json({error:err.message})
        }
        console.log(err)
        res.status(500).json({err:err.message})
    }
})



router.delete('/:petId',async (req,res)=>{
    try{
        const deletedPet = await Pet.findByIdAndDelete(req.params.petId)
        res.status(200).json(deletedPet)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:err.message})
    }
})



router.put('/:petId',async(req,res)=>{
    try{
        const updatedPet = await Pet.findByIdAndUpdate(req.params.petId, req.body,{new:true})

        if(!updatedPet){
            return res.status(404).json({message:"Pet not found"})
        }

        res.status(200).json(updatedPet)


    }
    catch(err){
        console.log(err)
        res.status(500).json({error:err.message})

    }
})

module.exports = router