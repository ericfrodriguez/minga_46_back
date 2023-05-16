import express from 'express'

import passport from '../middlewares/passport.js'
import userRouter from './auth.js'
import authorRouter from './authors.js'
import categoryRouter from './categories.js'
import companyRouter from './companies.js'
import mangaRouter from './mangas.js'
import chapterRouter from './chapters.js'

const router = express.Router()

/* GET home page. */
router.get('/', (req,res,next) => res.render('index', { title: 'MINGA API', subtitle: 'endpoints of minga' }))

router.use('/auth', userRouter)
router.use('/authors', passport.authenticate('jwt',{session:false}), authorRouter)
router.use('/categories', categoryRouter)
router.use('/companies', passport.authenticate('jwt',{session:false}), companyRouter)
router.use('/mangas', passport.authenticate('jwt',{session:false}), mangaRouter)
router.use('/chapters', passport.authenticate('jwt',{session:false}), chapterRouter)

export default router