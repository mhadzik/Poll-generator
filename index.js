const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");

require('./models/Poll')


mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie lasts 30 days in miliseconds
    keys: [keys.cookieKey],
  })
);
// app.use(passport.initialize());
// app.use(passport.session());


require("./routes/testRoute")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
