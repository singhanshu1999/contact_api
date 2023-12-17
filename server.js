const express = require("express");
const contactApi = require("./routes/contactsRoute");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const port = 3000;

app.use(express.json());
app.use("/api/contact", contactApi);
app.use(errorHandler);

app.listen(port, () => {
  console.log("server is running on port: ", port);
});
