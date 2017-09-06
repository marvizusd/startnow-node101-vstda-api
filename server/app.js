const express = require('express');
const morgan = require('morgan');
const app = express();
const jsonParser = require('body-parser').json;

app.use(morgan('dev'))
app.use(jsonParser());

var mockData = [
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }];

// add your code here


app.get('/', function(req, res){
  res.status(200).send(mockData);
  // console.log(mockData[1].todoItemId)
})

app.get('/api/TodoItems', function(req,res){
    res.status(200).send(mockData);
});

app.post('/api/TodoItems', function(req,res){
  res.status(201).send(req.body);
});

app.delete('/api/TodoItems/:id', function(req,res){
  var deletedObj = [];
  for(var i = 0; i< mockData.length; i++){
    if(req.params.id == mockData[i].todoItemId){
      deletedObj = mockData.splice(i, 1);
      res.json(deletedObj[0]);
    }else{
      res.json("error");
    }
  }
  // console.log(mockData);
});

app.get('/api/TodoItems/:id', function(req,res){
  for(var i = 0; i< mockData.length; i++){
    if(req.params.id == mockData[i].todoItemId){
      res.json(mockData[i]);
    }else{
      res.json("error");
    }
  }
  // console.log(mockData);
});

module.exports = app;
