import express from 'express'
import { MongoClient } from 'mongodb'
import PropertiesReader from 'properties-reader'

const app = express()
const port = 3000

const properties = PropertiesReader('./application.development.properties')

const dburi: string = properties.get('db-uri')
const database: string = properties.get('database')
const mongoDb = new MongoClient(dburi + '/' + database)

console.log('MongoDB URI:', dburi)

mongoDb.connect().then((res) => {
  console.log(res)
}).catch((err) => {
  console.log('Error:', err)
})

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`Server running at ${port}`, port)
})
