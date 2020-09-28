const express = require('express');
const debug = require('debug')('server:server.js');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const DATABASE_CONFIG = require('./database/DATABASE_CONFIG');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const jwtAuthz = require('express-jwt-authz');
const JWT_CONFIG = require('./config/JWT_CONFIG');
const cors = require('cors');

const PORT = process.env.PORT || 3010;
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(cors());

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: JWT_CONFIG.cache,
      rateLimit: JWT_CONFIG.rateLimit,
      jwksRequestsPerMinute: JWT_CONFIG.jwksRequestsPerMinute,
      jwksUri: JWT_CONFIG.jwksUri
  }),
  audience: JWT_CONFIG.audience,
  issuer: JWT_CONFIG.issuer,
  algorithms: JWT_CONFIG.algorithms
});

server.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

const projectRoutes = require('./src/routes/projectRoutes')(DATABASE_CONFIG.projectsCollection);

server.use('/api/projects', jwtCheck, projectRoutes);

const budgetRoutes = require('./src/routes/budgetRoutes')(DATABASE_CONFIG.budgetsCollection);

server.use('/api/budgets', jwtCheck, budgetRoutes);

const quotationRoutes = require('./src/routes/quotationRoutes')(DATABASE_CONFIG.quotationsCollection);

server.use('/api/quotations', jwtCheck, quotationRoutes);

const userRoutes = require('./src/routes/userRoutes')(DATABASE_CONFIG.usersCollection);

server.use('/api/users', jwtCheck, userRoutes);

server.listen(PORT, ()=>{ console.log(`Server listening on port ${chalk.blueBright(PORT)}`)});
