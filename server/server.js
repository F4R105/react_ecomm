const express = require("express");
const app = express();
const cors = require("cors");
const database = require("./ecomm_db");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const productsModel = database.model("product", {
  image: String,
  name: String,
  price: Number,
});

app.get("/vifaa", async (req, res) => {
  const vifaa = await productsModel.find({});
  res.json(vifaa);
});

app.post("/vifaa", async (req, res) => {
  const kifaa = req.body;
  const newKifaa = new productsModel(kifaa);
  const addedKifaa = await newKifaa.save();
  res.json(addedKifaa);
});

app.listen("1234", () => console.log("server listening on port 1234"));
