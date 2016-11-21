exports.DATABASE_URL = 'mongodb://shopper:shopper@ds159507.mlab.com:59507/shopping-list-demo'

// exports.DATABASE_URL = process.env.DATABASE_URL ||
//                        global.DATABASE_URL ||
//                        (process.env.NODE_ENV === 'production' ?
//                             'mongodb://localhost/shopping-list' :
//                             'mongodb://localhost/shopping-list-dev');
exports.PORT = process.env.PORT || 8080;
