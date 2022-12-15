const express = require("express");
const app = express();
require("./db/config");
const User = require("./db/user");
const cors = require('cors');
app.use(cors({ origin: true }));

app.use(express.json());

app.post("/register", async(req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

app.listen(5000);