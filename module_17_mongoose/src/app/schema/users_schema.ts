import bcrypt from "bcrypt";
import validator from "validator";

import { Model, model, Schema } from "mongoose";
import {
  address,
  userInstanceMethod,
  users,
  userStaticMethod,
} from "../interfaces/user_interfaces";
import { Note } from "./notes_schema";

//todo => we will set "_id = false" when only embedding .means it's not a collection.[ module -> 17-4 ]

const addressSubSchema = new Schema<address>(
  {
    city: String,
    road: String,
    postalCode: Number,
  },
  {
    _id: false,
  },
);

export const usersSchema = new Schema<
  users,
  userStaticMethod,
  userInstanceMethod
>(
  {
    name: {
      firstName: {
        type: String,
        required: true,
        trim: true,
        minLength: 3, //*built-in validator in mongoose
        maxLength: 10, //*built-in validator in mongoose
      },
      lastName: {
        type: String,
        required: true,
        trim: true,
      },
    },
    age: {
      type: Number,
      required: true,
      min: 16, //*built-in validator in mongoose
    },
    address: addressSubSchema,
    email: {
      type: String,
      unique: [true, "this email already in used"], //* for schemas, it's not a validator. It's a convenient helper for building MongoDB unique indexes.

      // //todo --> custom validate
      // validate:{
      //   validator: function(value){
      //     return /^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/.test(value)
      //   } ,

      //     message: function(props){
      //       return `emial: ${props.value} is not a valid email`
      //     }

      // },
      validate: [validator.isEmail, "invalid email sent {VALUE}"],

      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: {
        values: ["user", "admin"],
        message: "{VALUE} cannot be entered {values}",
      }, //*built-in validator in mongoose
      default: "user",
    },
    password: {
      type: String,
      required: true,
      minLength: 5,
    },
  },

  {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

//*instance method
usersSchema.method("hashPassword", async function (pass) {
  const password = await bcrypt.hash(pass, 10);
  return password;
});
//*static method
usersSchema.static("hashPassword", async function (pass) {
  const password = await bcrypt.hash(pass, 10);
  return password;
});

//todo -> document middlewear

//*pre hook(middleware) for save password
usersSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
  console.log("this is pre save hook");
});

//*post hook
usersSchema.post("save", function () {
  console.log(`${this.email} save post hook`);
});

//todo -> query middlewear

//pre hook

usersSchema.pre("find", function (doc) {
  console.log("from ore find hook", doc);
});

//*post hook (delete all post when user is deleted)

usersSchema.post("findOneAndDelete", async function (doc, next) {
  if (doc) {
    // console.log(doc);
    await Note.deleteMany({ user: doc._id });
  }
  next();
});

//* virtuals

usersSchema.virtual("fullName").get(function () {
  return `${this.name.firstName} ${this.name.lastName}`;
});

export const Users = model<users, userStaticMethod>("Users", usersSchema);
