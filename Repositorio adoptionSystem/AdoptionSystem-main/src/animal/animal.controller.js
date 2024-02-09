'use strict'

import { checkUpdate } from '../utils/validator.js'
import Animal from './animal.model.js'

export const testA = (req, res) => {
    console.log('test is running')
    return res.send({ message: 'Test is running' })
}

export const registerA = async (req, res) => {
    try {
        let data = req.body
        console.log(data)
        let animal = new Animal(data)
        await animal.save()
        return res.send({message: `Animal registered successfully ${animal.name}`})
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error registering animal', err: err })
    }
}

export const updateA = async (req,res) => {
    try{
        let { id } = req.params
        let data =  req.body
        let update = checkUpdateA(data, id)
    }catch(err){
        console.error(err)
    }
}

export const deleteAnimal = async(req, res) =>{
    try{
        let { id} = req.params

        let deleteAnimal = await Animal.findOneAndDelete({_id: id}) 
        if(!deleteAnimal) return res.status(404).send({message: 'Animal not found and not deleted'})
        return res.send({message: `Animal ${deleteAnimal.name} deleted succesfully`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error deleting animal'})
    }
}