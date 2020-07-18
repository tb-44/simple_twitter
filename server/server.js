const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "message response",
  });
});

app.post("/comments", (req, res) => {
  console.log(req.body);
});

app.listen(5000, () => {
  console.log("Listening on http://localhost:5000");
});
