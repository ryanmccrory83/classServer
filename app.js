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

app.post('/',(req,res,next) => {
    query.createOneProfile(req.body).then(data => {
        res.json({data})
    })
})

app.put('/:id', (req,res,next) => {
    query.updateOneProfile(req.params.id,req.body).then(data => {
        res.json({data})
    })
})

app.delete('/:id', (req,res,next) => {
    query.deleteOneProfile(req.params.id).then(data => {
        res.send({
            message: `your entry with the id of ${data} was deleted`
        })
    })
})

app.listen(port,() =>{
  console.log(`listening on port ${port}`)  
})