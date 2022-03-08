require("dotenv").config();

module.exports = {
  db:
    process.env.DB ||
    "mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@secureloginsystem.xlpbg.mongodb.net/YOUR_DATABASE_COLLECTION?retryWrites=true&w=majority",
};
