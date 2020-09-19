module.exports = () => ({
    app: {
        port: process.env.PORT || 3000,
    },
    db: {
        mongo: {
            uri: process.env.MONGO_DB_URI || 'mongodb://admin:pass@localhost:27017',
        }
    }
});