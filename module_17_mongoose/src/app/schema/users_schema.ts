import validator from 'validator';

import { model, Schema } from "mongoose";
import { address, users } from "../interfaces/user_interfaces";


//todo => we will set "_id = false" when only embedding .means it's not a collection.[ module -> 17-4 ]

const addressSubSchema = new Schema<address>({
  city: String,
  road:String,
  postalCode:Number
},{
  _id:false
})

export const usersSchema = new Schema<users>(
  {
    name: {
      firstName: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,//*built-in validator in mongoose
        maxLength:10 //*built-in validator in mongoose
      },
      lastName: {
        type: String,
        required: true,
        trim: true,
      },
    },
    age:{
        type:Number,
        required:true,
        min: 16 //*built-in validator in mongoose
    },
    address: addressSubSchema,
    email: {
      type: String,
      unique:[true, 'this email already in used'], //* for schemas, it's not a validator. It's a convenient helper for building MongoDB unique indexes.

      // //todo --> custom validate
      // validate:{
      //   validator: function(value){
      //     return /^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/.test(value)
      //   } ,
        
      //     message: function(props){
      //       return `emial: ${props.value} is not a valid email`
      //     }
        
      // },
      validate: [validator.isEmail, 'invalid email sent {VALUE}'],
    
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: {
        values:["user", "admin"],
        message: '{VALUE} cannot be entered {values}'
    
    },//*built-in validator in mongoose
      default: "user",
    },
    password: {
      type: String,
      required: true,
      minLength: 5
    }
  },

  {
    versionKey: false,
    timestamps: true,
  },
);

export const Users = model("Users", usersSchema);
