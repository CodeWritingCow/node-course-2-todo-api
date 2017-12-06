// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

// MongoClient.connect(`mongodb://localhost:27017/TodoApp
MongoClient.connect(`mongodb://${process.env.IP}:27017/TodoApp`, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a277a517fb15708a05c432c')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });
    
    
    // CHALLENGE
    // UPDATE NAME
    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID('5a261f90a314b9115783a83e')
    // }, {
    //     $set: {
    //         name: 'Moo Moo'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // INCREMENT (INC) AGE
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a261f90a314b9115783a83e')
    }, {
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    // db.close();
});