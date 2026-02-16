import { model, Schema } from "mongoose";
import { users } from "../interfaces/user_interfaces";

export const usersSchema = new Schema<users>({
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },
    address: { type: String , required:true},
    email: { type: String, required: true },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
})


 export const Users =  model('Users', usersSchema )