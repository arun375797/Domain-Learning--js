// Node-style callbacks receive (error, result).
function readFileMock(path, callback) {
  if (!path) {
    callback(new Error("Path required"));
    return;
  }
  callback(null, "file contents");
}

readFileMock("", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  console.log(data);
});
