const express = require('express');
const app = express();
const { createTodo,updateTodo } =  require("./types");
const { todo } = require("./db");
const port = 3000;

app.use(express.json());

app.post("/todo",async function(req,res){
    const createpayload = req.body;
    const parsePayload = createTodo.safeParse(createpayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;
    }

    await todo.create({
        title:createpayload.title,
        description: createpayload.description,
        completed: false 
    })

    res.json({
        msg:"Todo created"
    })
})

app.get("/todos",async function(req,res){
    const todos = await todo.find({});
    
    res.json({
        todos
    })
})

app.put("/completed", async function(req,res){
    const createpayload = req.body;
    const parsePayload = updateTodo.safeParse(createpayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })
})

app.listen(port,()=>{
    console.log(`TODO app listening on port ${port}`)
})