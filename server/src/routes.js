const AuthenticationController = require ('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const BandsController = require('./controllers/BandsController');

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    
    app.post('/login',
        AuthenticationController.login)

    app.get('/bands',
        BandsController.index)
    
    app.post('/bands',
        BandsController.post)
    
    app.get('/bands/:bandId',
        BandsController.show)

    app.put('/bands/:bandId',
        BandsController.put)    
}
