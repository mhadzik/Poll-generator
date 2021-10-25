if (process.env.NODE_ENV === "production") {
  //in prod set of keys
  module.exports = require("./prod");
} else {
  //in the dev set of keys
  module.exports = require("./dev");
}
