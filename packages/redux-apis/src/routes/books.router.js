const express = require("express");
const router = express.Router();
const { v1 } = require('uuid');

var booksDommy = [{
  id: "2336f6a0-a1c4-11ed-af92-5dad79a1fd7d", //v1(),
  name: "Express for Dummies",
  author: "JGuilléN Dev",
  price: 250
}];

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", (req, res) => {
  res.status(200).send(booksDommy);
});

router.get("/book/:id", (req, res) => {
  const book = booksDommy.find(b=>b.id === req.params.id)
  console.log("id:", req.params.id);
  res.status(200).send(book);
});

router.get("/find", (req, res) => {
  res.send("About Book");
});

router.post("/", (req, res) => {
  res.send("Post Book");
});

router.put("/", (req, res) => {
  res.send("Put Book");
});

router.patch("/", (req, res) => {
  res.send("Patch Book");
});

router.delete("/", (req, res) => {
  res.send("Delete Book");
});

module.exports = router;
