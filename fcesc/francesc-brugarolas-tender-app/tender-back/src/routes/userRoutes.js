const express = require('express');
const db = require('../modules/modules.js');

function router(collection){
  const userRoutes = express.Router();

  userRoutes
    .route('/:userSub')
    .post(async(req, res) => {
      try {
        const uniqueId = req.params.userSub;
        const query = { 'user_sub': uniqueId };
        const data = await db(collection).findToArray(query);
        
        let result;
        if (data.length === 0 && req.params.userSub.slice(0,6) === 'auth0|'){
          const user = req.body.user;
          
          await db(collection).createOne( { name: user.name, email: user.email, user_sub: uniqueId  } );
          result = { type: 'new', uid: data[0]._id };
        } else {
          result = { type: 'recurrent', uid: data[0]._id };
        }
        res.status(200);
        res.json(result);
      } catch (error) {
        res.status(404);
        res.send(error);
      }
    });

  return userRoutes;
}

module.exports = router;