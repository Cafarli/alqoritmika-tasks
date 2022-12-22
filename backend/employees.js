const express = require('express');
const app = express();

var http = require('http');

const employees = [
    {'id':1,'fullname':'John','age':25},
    {'id':2,'fullname':'Paul','age':21},
    {'id':3,'fullname':'Carl','age':19}
]

app.get('/employees', function (req, res) {
    res.send(JSON.stringify(employees));  
    // res.send(JSON.stringify(employees.find((employee) => employee.id == req.params.id)));
  });

  
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });