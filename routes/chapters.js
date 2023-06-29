import { Router } from "express"
import read from '../controllers/chapters/read.js'

const chapter_router = Router()

//chapter_router.post()
chapter_router.get('/',read)
//chapter_router.put()
//chapter_router.delete()

export default chapter_router