const someEntirelyPrivateProp = 23;
const exposedPrivateVariable = true;

function getExposedPrivateVariable(){
  return `Is this an exposed (no longer private) variable? ${exposedPrivateVariable}`; 
} 

exports.somePublicProp = 37;
exports.somePublicMethod = getExposedPrivateVariable; // getters expose variables too