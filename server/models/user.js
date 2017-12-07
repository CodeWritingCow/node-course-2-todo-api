var mongoose = require("mongoose");

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

// var user = new User({
//     email: '  moomoo@cowmail.com   '
// });

// user.save().then((doc) => {
//     console.log('Saved user', doc);
// }, (err) => {
//     console.log('Unable to save user', err);
// });

module.exports = {User};