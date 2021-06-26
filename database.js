const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect MongoDB Atlas
var mongo_uri = "mongodb+srv://pond:1234@cluster0.r6ann.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {
    console.log("[success] task 2 : connected to the database ");
  },
  error => {
    console.log("[failed] task 2 " + error);
    process.exit();
  }
);


// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  clicked: {
    type: Boolean,
    required: true
  }
});

module.exports = User = mongoose.model('users', UserSchema);