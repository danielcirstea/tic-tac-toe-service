const mongoose = require('mongoose');
const AbstractStorage = require('../AbstractStorage');
const config = require('../../common/config')();

class MongoStorage extends AbstractStorage {
    constructor() {
        super();
        this.config = config.db.mongo;
        this.__init();
    }

    Move = mongoose.model('Move', {
        id: String,
        action: String,
    });

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

    __saveMove(data) {
        const move = new this.Move(data);
        move.save().then(() => console.log('Inserted move into database.'));
    }

    __getHistory(id) {
        return this.Move.find({ id: id }, { action: 1 })
            .then(history => {
                return history;
            })
            .catch(err => {
                if (err) return console.error('Could not retrieve data', err);
            });
    }

}

module.exports = MongoStorage;
