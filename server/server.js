var express = require("express");
var bodyParser = require("body-parser");
var {ObjectID} = require("mongodb");

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (err) => {
        res.status(400).send(err);
    });
});

// GET /todos/:id
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    };
    
    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send(todo);
        }
        res.send({todo});
    }).catch((err) => {
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req, res) => {
   var id = req.params.id;
   
   // validate the id -> not valid? return 404
   if(!ObjectID.isValid(id)) {
       return res.status(404).send();
   };
   
   // remove todo by id
   Todo.findByIdAndRemove(id).then((todo) => {
       if(!todo) {
           return res.status(404).send();
       }
       res.send(todo);
   }).catch((err) => {
       res.status(400).send();
   });
});  


app.listen(port, process.env.IP, () => {
    console.log(`${process.env.IP} Started on port ${port}`);
});

module.exports = {app};