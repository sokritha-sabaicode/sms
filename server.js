const config = require('./config')
const app = require('./app.js')

const PORT = config.PORTS;

const server = app.listen(PORT, ()=> {
    console.log('server is running on port: ', PORT);
})