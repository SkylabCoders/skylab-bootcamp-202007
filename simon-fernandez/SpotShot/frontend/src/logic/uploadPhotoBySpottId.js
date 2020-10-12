export default function uploadPhotoBySpottId(spotId, image) {
  const formData = new FormData();
  const filename = image.localUri.split("/").pop();

  const match = /\.(\w+)$/.exec(filename);
  const type = match ? `image/${match[1]}` : `image`;

  formData.append("image", {
    uri: image.localUri,
    name: `${spotId}|${filename}`,
    type,
  });
  return (async () => {
    await fetch("http://192.168.0.11:4200/api/spots/uploadImage", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  })();
}
