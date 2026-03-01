import { Users } from "./../schema/users_schema";
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import z, { success } from "zod";

export const usersRoutes = express.Router();

const createUserWithZodSchema = z.object({
  name: z.string(),
  age: z.number(),
  address: z.string(),
  email: z.string(),
  role: z.string().optional(),
});

usersRoutes.post("/create-user", async (req: Request, res: Response) => {
  try {
    //  const body = await createUserWithZodSchema.parseAsync(req.body)
    const body = req.body;

    // //* user instance method
    // const allUsers = new Users(body);

    // const password = await allUsers.hashPassword(body.password);
    // allUsers.password = password;

    // await allUsers.save()
    
    // console.log(password);


    //* user static method
    const password = await Users.hashPassword(body.password)
    console.log(password,"satatic method");
    
    body.password = password

    const allUsers = await Users.create(body);



    res.status(202).json({
      success: true,
      message: "sucessfull",
      user: allUsers,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});

usersRoutes.get("/", async (req: Request, res: Response) => {
  const allUsers = await Users.find();
  res.json(allUsers);
});

usersRoutes.get("/:userID", async (req: Request, res: Response) => {
  const userID = req.params.userID;
  const user = await Users.findById(userID);
  res.json(user);
});

usersRoutes.patch("/update/:updateID", async (req: Request, res: Response) => {
  const updateID = req.params.updateID;
  const updateBody = req.body;
  const updateUser = await Users.findByIdAndUpdate(updateID, updateBody, {
    new: true,
  });
  res.json(updateUser);
});

usersRoutes.delete("/delete/:deleteID", async (req: Request, res: Response) => {
  const deleteID = req.params.deleteID;
  const deleteUser = await Users.findByIdAndDelete(deleteID);
  res.json({
    message: "deleted successfuly",
    deleteUser,
  });
});
