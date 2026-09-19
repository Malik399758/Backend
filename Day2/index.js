/// Server creation using http module

// let http = require('http')

// let server = http.createServer((req,res) =>{
//     res.end('Server is running')
// })

// server.listen("3000")


let http = require('http')

let server = http.createServer((req,res) =>{
    if(req.url == '/'){
        res.end('Home Page')
    }else if(req.url == '/about'){
        res.end('About Page')
    }else if(req.url == '/contact'){
        res.end('Contact Page')
    }else{
        res.end('Page Not Found')
    }
})


server.listen('3000')