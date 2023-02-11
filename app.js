const express = require("express");
const app = express();
const port = process.env.port || 3000;
const { healthCheck } = require("./routes/health_check");
const { router } = require("./routes/posts");
const { connection } = require("./model/connection");
const { posts } = require("./model/posts");
app.use(express.json());
app.use(healthCheck());
app.use(router);
connection
  .sync()
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log("error :", error);
  });

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
