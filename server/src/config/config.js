const path = require('path');

module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'grouptracker',
        user: process.env.DB_USER || 'grouptracker',
        password: process.env.DB_PASSWORD || 'grouptracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: path.resolve(__dirname, '../../tabtracker.sqlite'),
            operatorsAliases: false
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}