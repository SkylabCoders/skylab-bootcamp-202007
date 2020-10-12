const express = require('express');
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const { audience, issuer, jwksUri } = require('./config/auth0');

const Band = require('./src/models/bandModel');
const User = require('./src/models/userModel');

const app = express();
const { PORT: port } = process.env;

mongoose.connect('mongodb://localhost/TheMusicBox', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));

app.use(cors());

// Token
const jwtCheck = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri
  }),
  audience,
  issuer,
  algorithms: ['RS256']
});

const bandRouter = require('./src/routes/bandRoutes')(Band);

app.use('/band', bandRouter);

const authRouter = require('./src/routes/authRoutes')(User);

app.use('/auth', jwtCheck, authRouter);

const imageRouter = require('./src/routes/imageRouter')();

app.use('/images', imageRouter);

app.listen(port, debug(`Server is running at port ${port}`));

module.exports = app;
