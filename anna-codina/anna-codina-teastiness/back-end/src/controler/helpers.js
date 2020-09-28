const arrayUpload = (id, oldArray) => {
  let newUploadedArray = [];
  const checker = oldArray.some((actualItem) => {
    return actualItem._id + '' === id + '';
  });
  if (checker) {
    newUploadedArray = oldArray.filter((actualItem) => {
      return actualItem._id + '' !== id + '';
    });
  } else {
    newUploadedArray = [...oldArray, id];
  }
  return newUploadedArray;
};
module.exports = { arrayUpload };
