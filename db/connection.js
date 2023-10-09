const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://sahilgoliwar:test@cluster0.z4yobm9.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports = client;
