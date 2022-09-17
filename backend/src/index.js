const express = require("express");
const app = express();
const data = require("../data/data");
const fs = require("fs");
// const logger = require("morgan");
const cors = require("cors");
app.use(express.json());
app.use(cors());
// app.use(logger());

app.get("/api/yugioh", (req, res) => {
  res.json(data);
});
app.get("/api/yugioh/:id", (req, res, next) => {
  const { id } = req.params;
  const response = data.filter((carta) => carta.id === id);
  if (response.length > 0) {
    return res.json(response);
  }
  res.status(404).send("PAGE NOT FOUND");
});

app.use((req, res, next) => {
  fs.readFile(`index.html`, "utf-8", (err, content) => {
    if (err) {
      console.log(err);
      return res.send("xD");
    } else {
      return res
        .status(404)
        .contentType("image/jpg")
        .contentType("html")
        .send(content);
    }
  });
  //   res.status(404).send(redireccion);
});

const PORT = 3600;

app.listen(PORT, () => {
  console.log(`Estamoscorriendo en el servidor ${PORT}`);
});
