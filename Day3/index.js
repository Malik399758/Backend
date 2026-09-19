let express = require('express')

let app = express()


app.get('/',(req,res) =>{
    res.send('This is my first api')
})

app.get('/news',(req,res) =>{
    let ob = {
        status : 200,
        data : [
            {
                title : "News 1",
                description : "This is news 1"
            },
            {
                title : "News 2",
                description : "This is news 2"
            },
            {
                title : "News 3",
                description : "This is news 3"
            }       
        ]
    }
    res.send(ob)
})

app.listen("3000")