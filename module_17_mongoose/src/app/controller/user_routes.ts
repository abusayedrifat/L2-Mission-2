import express, { Request, Response } from 'express'
import { Users } from '../schema/users_schema'

export const usersRoutes = express.Router()

usersRoutes.get('/',async(req:Request,  res:Response)=>{
    
    const allUsers = await Users.find()
    res.json(allUsers)
})

usersRoutes.post('/create-user',async(req:Request,  res:Response)=>{
    
    const body = req.body
    const allUsers = await Users.create(body)
    res.json(allUsers)
})
