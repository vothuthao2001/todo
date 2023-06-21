const todoModel = require('../models/todoModel');

module.exports.getTodo = async (req,res)=>{
const todo =  await todoModel.find()
res.send(todo);
}

module.exports.saveTodo = async (req,res)=>{
    const {text} = req.body
    todoModel.create({text: text})
    .then((data)=>{
        console.log('added todo successfully');
        console.log(data);
        res.send(data);
    })
}

module.exports.updateTodo = (req, res) => {
    const {_id, text} = req.body
    todoModel.findByIdAndUpdate(_id, {text})
    .then(() => res.send("updated successfully"))
    .catch((err) => console.log(err));
}

module.exports.deleteTodo = (req, res) => {
    const {_id} = req.body
    todoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => console.log(err));
}