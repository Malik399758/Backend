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
            },
            {
                title : "New 4",
                description : "This is news 4"
            },
            {
                title : "New 5",
                description : "This is news 5"
            },
            {
                title : "New 6",
                description : "This is news 6"
            },
            {
                title : "New 7",
                description : "This is news 7"
            },
            {
                title : "New 8",
                description : "This is news 8"
            },
            {
                title : "New 9",
                description : "This is news 9"
            },
            {
                title : "New 10",
                description : "This is news 10"
            },
                   
        ]
    }
    res.send(ob)
})

app.listen("3000")