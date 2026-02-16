import express, { Request, Response } from 'express'
import { Users } from '../schema/users_schema'

export const usersRoutes = express.Router()

usersRoutes.get('/',async(req:Request,  res:Response)=>{
    
    const allUsers = await Users.find()
    res.json(allUsers)
})

usersRoutes.get('/:userID',async(req:Request,  res:Response)=>{
    
    const userID = req.params.userID;
    const user = await Users.findById(userID);
    res.json(user)
})

usersRoutes.post('/create-user',async(req:Request,  res:Response)=>{
    
    const body = req.body
    const allUsers = await Users.create(body)
    res.json(allUsers)
})

usersRoutes.patch('/update/:updateID',async(req:Request,  res:Response)=>{
    
    const updateID = req.params.updateID
    const updateBody = req.body
    const updateUser = await Users.findByIdAndUpdate(updateID, updateBody,{new:true})
    res.json(updateUser)
})

usersRoutes.delete('/delete/:deleteID',async(req:Request,  res:Response)=>{
    
    const deleteID = req.params.deleteID;
    const deleteUser = await Users.findByIdAndDelete(deleteID)
    res.json({
        message:'deleted successfuly',
        deleteUser
    })
})