var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
    var config = require('./config.json');
    var envConfig = config[env];
    
    Object.keys(envConfig).forEach((key) => {
      process.env[key] = envConfig[key];
    });
}

// if (env === 'development') {
//     process.env.PORT;
//     process.env.MONGODB_URI = `mongodb://${process.env.IP}:27017/TodoApp`;
// } else if (env === 'test') {
//     process.env.PORT;
//     process.env.MONGODB_URI = `mongodb://${process.env.IP}:27017/TodoAppTest`;
// }