const auth = require('../src/auth/routes')

module.exports = (app) => {
    app.use('/auth', auth);

    app.use('*', (req, res)=> {
        res.send('Not Found!!!')
    })
}