const templateGenerator = require('./someExporter');

async function showMe(){
  let stuff = await templateGenerator('Dirty Harry');
  console.log('DISPLAYER:', await stuff);
}

showMe();