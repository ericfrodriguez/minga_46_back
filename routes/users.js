import { Router } from "express"
import create from "../controllers/users/create.js";

import validator from "../middlewares/validator.js";
import userSignup from "../schemas/auth/signup.js";


const auth_router = Router()

//auth_router.get()
auth_router.post('/signup',validator(userSignup) , create);

export default auth_router