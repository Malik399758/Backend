const express = require("express");

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Server is working!");
});

app.get("/products/:id",(req,res) =>{
    let currentId = req.params.id
    res.send('product'+currentId)
})

app.post("/login",(req,res) =>{
    console.log(req.body) // here is request data

    res.send({
        status:"Success",
        data:req.body, // json data
        queryData:req.query // query data
    })
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});