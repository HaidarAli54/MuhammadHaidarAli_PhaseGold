

const express = require('express')
const app = express ()
const router = require('../routes/routes')


require('dotenv').config()

const port = process.env.PORT || 3000

app.get('/ping',(req,res)=>{
    try {
        res.status(200).json({
            massage: 'PONG'
        })

        console.log('Halo cooook')

        return

    }
    catch{
        res.status(500).json({
            massage: 'Server Busy'
        })
    }
})

app.use('/',router)

app.listen(port, () => {
    console.log(`listening live and well at ${port}`)
  })