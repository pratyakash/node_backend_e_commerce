module.exports = {
    DATABASE: {
        host: '127.0.0.1',
        username: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DATABASE,
        dialect: 'mysql',
        multipleStatements: true,
        timezone: '+05:30',
        pool: {
            max: 100,
            min: 0,
            idle: 10000,
            acquire: 30000,
        },
        define: {
            raw: true
        }
    }
}