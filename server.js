const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://smswanlund:ewolf0074@ds161285.mlab.com:61285/heroku_wbx3f12b",
  {
    useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  )

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
