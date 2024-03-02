const { Db, MongoClient } = require("mongodb");
const fs = require("fs");
const path = require("path");
const PropertiesReader = require("properties-reader");

module.exports = {
  async up(db) {
    const properties = PropertiesReader(
      "application.development.properties"
    );
    console.log(properties);
    const dburi = properties.get("db-uri");
    const databaseNm = properties.get("database");

    const client = await MongoClient.connect(dburi, {

      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const database = client.db(databaseNm);

    const collection = database.collection("jtg_countires_states");
    const filePath = path.resolve(__dirname, "states.json");
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    await collection.insertMany(jsonData);
    client.close();
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  },
};
