import { Router } from "express"
import create from "../controllers/users/create.js";

import validator from "../middlewares/validator.js";
import userSignup from "../schemas/auth/signup.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";

const auth_router = Router()

//auth_router.get()
auth_router.post('/register',validator(userSignup), accountExists, createHash, create);

export default auth_router