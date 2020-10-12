const transform = (doc, ret) => {
  delete ret._id;
  delete ret.hash;
};
module.exports = { transform };
