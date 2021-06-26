var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const User = require('./database');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/test',(req,res) => {
  res.json({ "status":"work"})
})

app.post('/likes', async function (req, res) {

  const newuser = new User({
    name : req.body.name,
    clicked: req.body.clicked
  })
  await newuser
    .save()
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});