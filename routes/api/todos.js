const express = require('express');
const todos = require('../../Todo');
const router = express.Router();
const uuid = require('uuid');


//Get all todos
router.get('/',(req,res)=>{res.json(todos)})

//get single todo
router.get('/:id',(req,res)=>{
  const found = todos.some(todo=>todo.id ===parseInt(req.params.id));

  if (found){
    res.json(todos.filter(todo=>todo.id === parseInt(req.params.id)));
  }
  else{
    res.status(400).json({msg:`todo not found of ${req.params.id}`})
  }
  
});

//create todo
router.post('/',(req,res)=>{
  const getId = Object.keys(todos).length;
  const newTodo = {
    id : getId+1, 
    name: req.body.name,

  }
  if (!newTodo.name){
    return res.status(400).json({msg:'Please include a name '});
  }
  todos.push(newTodo);
  res.redirect('/')
});

//update todo
router.put('/:id',(req,res)=>{
  const found = todos.some(todo=>todo.id === parseInt(req.params.id));

  if (found){
    const updTodo = req.body;
    todos.forEach(todo => {
      if (todo.id === parseInt(req.params.id)){
        todo.name = updTodo.name ? updTodo.name : todo.name;
        res.json({msg:'Todo updated',todo})
      }
    })
  }
  else{
    res.status(400).json({msg:`Todo not found of ${req.params.id}`})
  }
  
});

//Delete todo
router.delete('/:id',(req,res)=>{
  const found = todos.some(todo=>todo.name ===parseInt(req.params.name));

  if (found){
    res.json({msg:'Todo deleted',todos:todos.filter(todo=>todo.id !== parseInt(req.params.id))});
  }
  else{
    res.status(400).json({msg:`Todo not found of ${req.params.id}`})
  }
  
});

module.exports = router;