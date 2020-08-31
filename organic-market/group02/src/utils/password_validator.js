const passwordValidator = require('password-validator');

var schema = new passwordValidator();
 
schema
.is().min(8)
.is().max(12)
.has().not().spaces()
.has(/.*([=\[\]\(\)\*\/#!=])+.*/g);
 
function validatePasswordFormat(string){
  return schema.validate(string); // 2 possible outputs: true or the array of failed conditions if enabling , { list: true }
}

module.exports = validatePasswordFormat;
