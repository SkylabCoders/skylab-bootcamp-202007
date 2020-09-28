const express = require('express');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Category = require('./src/models/categoryModel');
const User = require('./src/models/userModel');
const Project = require('./src/models/projectModel');
const { uri, aud, issu } = require('./src/config/auth0/auth0');
const app = express();
const port = process.env.PORT || 3010;

const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const jwtAuthz = require('express-jwt-authz');
const cors = require('cors');


app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: uri
  }),
  audience: aud,
  issuer: issu,
  algorithms: ['RS256']
});



const db = mongoose.connect('mongodb://localhost:27017/building-green');

app.get('/', (req, res) => {
  res.send('My server is running');
});

const categoryRouter = require('./src/routes/categoryRouter')(Category);

app.use('/api/categories', checkJwt, categoryRouter);

const userRouter = require('./src/routes/userRouter')(User);

app.use('/api/users', checkJwt, userRouter)

const projectRouter = require('./src/routes/projectRouter')(Project);

app.use('/api/projects', projectRouter)

app.listen(port, () => debug(`Running on port ${port}`));
