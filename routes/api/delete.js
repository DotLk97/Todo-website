const express = require('express');
const todos = require('../../Todo');
const router = express.Router();

//Delete todo
router.post('/:id',(req,res)=>{
  const delId = todos.findIndex(obj => obj.id == req.params.id)
  todos.splice(delId,1)
  res.redirect('/')
  
});
module.exports = router;