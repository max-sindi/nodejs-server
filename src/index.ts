import * as process from "process"

require('babel-polyfill')

// import config from 'src/config/default'
import { mongoURI, APP_PORT } from 'src/config/default'
import router from 'src/router'
import { connectToMongodbDatabase } from 'src/config/database'
import express from 'express'
import expressWsWrapper from 'express-ws'

const app = express()
const expressWs = expressWsWrapper(app)

console.log(mongoURI)
console.log(process.env.PORT)

const initApp = async () => {
  await connectToMongodbDatabase(mongoURI)
}

initApp().then((r) => {
  console.log('Application started successfully')
})

app.use('/', router)

app.listen(APP_PORT, () => {
  console.log('Server port: ' + APP_PORT);
});

app.ws('/echo', function(ws, req) {
  ws.send('asddsa')
  ws.on('message', function(msg) {
    ws.send("Your message " + msg);
  });
})

export default {}
