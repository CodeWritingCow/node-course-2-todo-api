var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect(`mongodb://${process.env.IP}:27017/TodoApp`);

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// CHALLENGE
var newTodo = new Todo ({
    text: 'Build website',
    completed: true,
    completedAt: 2017
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('Unable to save todo');
});