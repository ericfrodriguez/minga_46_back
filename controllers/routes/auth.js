import signup from '../controllers/users/signup.js'
import signin from '../controllers/users/signin.js'
import signout from '../controllers/users/signout.js'

import validator from '../middlewares/validator.js'
import { userCreateSignUp,userCreateSignIn } from '../schemas/users.js'

import accountExistsSignUp from '../middlewares/accountSignUp.js'
import accountExistsSignIn from '../middlewares/accountSingIn.js'
import isVerified from '../middlewares/isVerified.js'
import passwordIsOk from '../middlewares/passIsOk.js'
import passport from '../middlewares/passport.js'

import express from 'express'
const router = express.Router()

router.post('/signup', validator(userCreateSignUp), accountExistsSignUp , signup)
router.post('/signin',validator(userCreateSignIn),accountExistsSignIn,isVerified,passwordIsOk,signin)
router.post('/signout',passport.authenticate('jwt',{session:false}),signout)

export default router