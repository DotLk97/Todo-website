const express = require('express');
const todos = require('../../Todo');
const router = express.Router();


router.get('/:id',(req,res)=>{
  const edID = todos.findIndex(obj => obj.id == req.params.id)
  todos[edID].complete = true
  res.redirect('/')
})


module.exports = router;