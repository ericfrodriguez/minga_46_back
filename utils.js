import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export { __filename,__dirname }

//esta variable es necesaria copnfigurarla manualmente debido a que
//ESmodule no la incluye por default