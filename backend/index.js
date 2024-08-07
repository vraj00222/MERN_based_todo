const express = require('express');
const app = express();
const { createTodo } =  require("./types");
const port = 3000;

app.use(express.json());

app.post("/todo",function(req,res){
    const createpayload = req.body;
    const parsePayload = createTodo.safeParse(createpayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;
    }
})

app.get("/todos",function(req,res){
    
})

app.put("/completed",function(req,res){
    const createpayload = req.body;
    const parsePayload = createTodo.safeParse(createpayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;
    }
})

app.listen(port,()=>{
    console.log(`TODO app listening on port ${port}`)
})