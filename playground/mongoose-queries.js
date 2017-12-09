const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// var id = '5a2c397813721a270f381581';
//var id = '6a2c397813721a270f381581'; // non-existent id
// var id = '5a2c397813721a270f38158100'; // invalid id

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// };


// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((err) => console.log(err));

var userId = '5a28bba28c003882090d51b0';

// query userId by findUserById
User.findById(userId).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((err) => console.log(err));
