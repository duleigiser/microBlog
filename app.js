var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/hello', routes);

var users = {
    'dulei': {
        name: 'Carbo1',
        website: 'http://www.baidu.com'
    }
};
app.all('/user/:username', function(req, res, next) {
    // 检查用户是否存在
    if (users[req.params.username]) {
        //console.log('all method id capture');
        next();
    } else {
        next(new Error(req.params.username + ' does not exist.'));
    }
});
app.get('/user/:username', function(req, res) {
   
    // 用户一定存在，直接展示
    
   // res.send(users[req.params.username]);
    res.send(JSON.stringify(users[req.params.username].website));
   
});
app.put('/user/:username', function(req, res) {
    // 修改用户信息
    res.send('Done');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// app.get("/",routes.index);
// app.get('u/:user',routes.user);
// app.post('/post',routes.post);

// app.get('/reg',routes.reg);
// app.post('/reg',routes.doReg);
// app.get('/login',routes.login);
// app.post('/login',routes.doLogin);
// app.get('logout',routes.logout);





// error handlers 

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
app.listen(3000);
console.log("Express server listening on port 3000 in dev mode");

module.exports = app;
console.log(21);
