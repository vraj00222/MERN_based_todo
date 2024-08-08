const mongoose = require ("mongoose");
//mongodb+srv://vrajpatel00222:jdcJ1Iqy2GeTaGML@cluster0.xxfd7y9.mongodb.net/todos


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo
}