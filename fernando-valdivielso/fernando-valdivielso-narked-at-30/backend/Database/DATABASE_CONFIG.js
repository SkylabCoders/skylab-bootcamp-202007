const userName = 'adminFer';
const password = 'NarkedFer';
const dbName = 'NarkedAt30';
const clusterName = 'narkedat30';

const url = `mongodb+srv://${userName}:${password}@${clusterName}.jyqyl.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`;

module.exports = { url };
