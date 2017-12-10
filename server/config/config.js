var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    process.env.PORT;
    process.env.MONGODB_URI = `mongodb://${process.env.IP}:27017/TodoApp`;
} else if (env === 'test') {
    process.env.PORT;
    process.env.MONGODB_URI = `mongodb://${process.env.IP}:27017/TodoAppTest`;
}