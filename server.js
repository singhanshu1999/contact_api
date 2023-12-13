const express = require("express");
const contactApi = require("./routes/contactsRoute");

const app = express();

const port = 3000;

app.use(express.json());
app.use("/contact", contactApi);

app.listen(port, () => {
  console.log("server is running on port: ", port);
});
