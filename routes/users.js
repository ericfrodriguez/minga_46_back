import { Router } from "express"
import register from "../controllers/users/register.js";
import signin from "../controllers/users/signin.js";
import signout from "../controllers/users/signout.js";

import validator from "../middlewares/validator.js";
import userSignup from "../schemas/auth/signup.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import accountNotExists from "../middlewares/accountNotExists.js"
import passwordIsOk from "../middlewares/passwordIsOk.js";
import generateToken from "../middlewares/generateToken.js";
import passport from "../middlewares/passport.js";

const auth_router = Router()

auth_router.post('/register',validator(userSignup), accountExists, createHash, register)
auth_router.post('/signin'/* validator(schemaSignin) */, accountNotExists, passwordIsOk, generateToken, signin)
auth_router.post('/signout',passport.authenticate('jwt',{ session:false }),signout)

export default auth_router