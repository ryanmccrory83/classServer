const express = require('express')
const app = express()
const port = 9000
const cors = require('cors')
const bodyParser = require('body-parser')
const query = require('./querry/profile') 

app.use(cors())
app.use(bodyParser.json())


app.get('/',(req,res,next) => {
    query.listAllProfiles().then(data => {
        res.json({data})
      })
})

app.get('/:id', (req,res,next) => {
    query.listOneProfile(req.params.id).then(data => {
        res.json({data})
    })
})


app.listen(port,() =>{
  console.log(`listening on port ${port}`)  
})