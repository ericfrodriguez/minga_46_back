import { Router } from "express"
import read from '../controllers/mangas/read.js'
import create from '../controllers/mangas/create.js'
let router = Router()

router.get('/',read)
router.post('/',create)
router.post('/comics',create)
router.post('/mangas',create)

export default router