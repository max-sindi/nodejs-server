import * as process from "process"
import path from "path"

import  { config } from 'dotenv'
config({ path: path.resolve(__dirname, '../../.env') })

console.log(process.env)

const db = {
  debug: process.env.DB_DEBUG,
  auth: process.env.DB_AUTH,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  name: process.env.DB_NAME,
  host: process.env.DB_HOST,
};

const mongoURI = 'mongodb+srv://' + db.user + ':' + db.password + '@' + db.host + '/' + db.name;
const APP_PORT = process.env.PORT

export {
  mongoURI, APP_PORT
}

