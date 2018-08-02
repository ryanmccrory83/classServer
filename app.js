const express = require('express')
const app = express()
const port = 9000
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())


app.get('/',(req,res,next) => {
    res.send('🦖')
})


app.listen(port,() =>{
  console.log(`listening on port ${port}`)  
})