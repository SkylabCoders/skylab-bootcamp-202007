const passwordValidator = require('password-validator');

var schema = new passwordValidator();
 
schema
.is().min(8)
.is().max(12)
.has().not().spaces()
.has().oneOf(['[', ']', '!', '#', '/', '(', ')', '=', '*']);
 
function validatePasswordFormat(string){
  return schema.validate(string, { list: true }); // 2 possible outputs: true or the array of failed conditions
}

module.exports = validatePasswordFormat;
