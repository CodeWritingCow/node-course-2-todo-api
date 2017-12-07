var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect(`mongodb://${process.env.IP}:27017/TodoApp`);

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// CHALLENGE
// var newTodo = new Todo ({
//     text: 'Something to do'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

// CHALLENGE
// Make a new User model
// email - require it - trim it - set type to String - set min length of 1
// Then make one user without email property
// Then make one user with email property

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

var user = new User({
    email: '  moomoo@cowmail.com   '
});

user.save().then((doc) => {
    console.log('Saved user', doc);
}, (err) => {
    console.log('Unable to save user', err);
});