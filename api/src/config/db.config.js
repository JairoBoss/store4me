require("dotenv").config();
module.exports = {
  /**
   * Para conectarse al cluster
   * url: `mongodb+srv://${process.env.CLUSTER_MONGO_USER}:${process.env.CLUSTER_MONGO_PASSWORD}@apipsp.6fuw2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
   * Para conectarse de manera local
   * url: `mongodb://localhost:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
   */    
  url: `mongodb://localhost:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
};
