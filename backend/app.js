const express = require("express");
const app = express();
const PORT = process.env.PORT || 8888;

const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => res.send("hello-world"));
app.listen(PORT, () => console.log(`Server Run Port:${PORT}`));
