const express = require('express');
const todos = require('../../Todo');
const router = express.Router();


//Redirect
router.get('/:id',(req,res)=>{
  const edID = todos.findIndex(obj => obj.id == req.params.id)
  todos[edID].edit = true
  res.redirect('/api/edit')
})


//edit todo
router.post('/:id',(req,res)=>{
  const edID = todos.findIndex(obj => obj.id == req.params.id)
  const updTodo = req.body;
  todos.forEach(todo => {
    if (todo.id === parseInt(req.params.id)){
      todo.name = updTodo.name ? updTodo.name : todo.name;
      res.redirect('/')
    }
  })
  todos[edID].edit = false;
});

module.exports = router;