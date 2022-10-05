const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const todos = require("./Todo")
var bodyParser = require('body-parser');

const app = express();


//Handlebars middleware
app.engine('handlebars',exphbs.engine({defaultLayout:'main'}));
app.set('view engine','handlebars');


// Put these statements before you define any routes.
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

//Home page route
app.get('/',(req,res)=> res.render('index',{
  title:'Todo List',
  todos
}))

//Edit page route
app.get('/api/edit',(req,res)=> res.render('edit',{
  title:'Todo List',
  todos
}))



//todos API Routes
app.use('/api/todos',require('./routes/api/todos'))

app.use('/api/delete',require('./routes/api/delete'))

app.use('/api/edit',require('./routes/api/edit'))

app.use('/api/complete',require('./routes/api/complete'))


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server started on port ${PORT}`));