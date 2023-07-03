import express from 'express'
import author_router from './authors.js'
import category_router from './categories.js'
import manga_router from './mangas.js'
import chapter_router from './chapters.js'
import auth_router from './users.js'

let router = express.Router()

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

router.use('/authors',author_router)        //obligo al enrutador principal a usar las rutas de authors con la palabrita /authors
router.use('/categories',category_router)   //obligo al enrutador principal a usar las rutas de categories con la palabrita /categories
router.use('/mangas',manga_router)
router.use('/chapters',chapter_router)
router.use('/auth',auth_router)

export default router