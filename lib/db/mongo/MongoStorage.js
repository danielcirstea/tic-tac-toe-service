const mongoose = require('mongoose');
const AbstractStorage = require('../AbstractStorage');
const config = require('../../common/config')();

class MongoStorage extends AbstractStorage {
    constructor() {
        super();
        this.config = config.db.mongo;
        this.__init();
    }

    __init() {
        const db = mongoose.connection;
        mongoose.connect(this.config.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        db.on('error', console.error.bind(console, 'Connection error.'));
        db.once('open', () => {
            console.log('Initialized MongoDb connection.');
        });
    }
}

module.exports = MongoStorage;
