const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    if (err) console.log('Error', err);
    else console.log('Mongodb connected')
})

module.exports = mongoose;