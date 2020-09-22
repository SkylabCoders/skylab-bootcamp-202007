/*
console.log(arguments);
function dynamicArgsFunction() {
	console.log(arguments);
}
dynamicArgsFunction('Hello Node!', 14, true, [1, 2, 3]);
*/

// function (exports,modules,require,__filename,__dirname){
//exports.a = 15
//modules.exports.b = 30
//
//    return modules.exports
// }

module.exports = (title, promo) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
  </head>
  <body>
  ${promo}
  </body>
</html>
`;
