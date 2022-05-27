require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;


const express = require('express')
const userRouter = require('./routers/auth')
const cartRouter = require('./routers/cart')
const passport = require('passport');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const key = require('./config/keys')

const methodOverride = require("method-override");
require('./db/mongoose')

const port = 9000

const app = express()

app.use(cookieParser());
app.use(methodOverride('_method'));


app.use(session({
    secret: key.secretOrKey,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    res.locals.isAuthenticated = req.isAuthenticated() || req.session.isLoggedIn;
    next();
});
app.use(express.json())
app.use(userRouter)
app.use(cartRouter)

const path = require("path");
var indexRouter = require('./routers/other');
var productsRouter = require('./routers/other');
var blogRouter = require('./routers/other');
var aboutRouter = require('./routers/other');
var registrationRouter = require('./routers/other');
var cart2Router = require('./routers/other');
var loginRouter = require('./routers/other');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/blog', blogRouter);
app.use('/about', aboutRouter);
app.use('/cart2', cart2Router);
app.use('/auth', require('./routers/auth'));



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log('server listening on port ' + port)
})
const swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get("/auth/google",
    passport.authenticate('google',{ scope: ["profile"] })
)

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });