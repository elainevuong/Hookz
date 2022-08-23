const express = require("express");
const router = express.Router();
const Bin = require("../models/bin")
const Request = require("../models/request")
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

// Gets All Bins
router.get('/bins', (req, res) => {
  Bin.find({})
    .then(bins => res.json(bins))
    .catch(next);
})

// Gets A Bin By Id
router.get('/bins:id', (req, res) => {
  const binId = req.params.id
  Bin.findById(binId)
    .then(bin => res.json(bin))
    .catch(next);
})

// Creates a New Bin
router.post("/bins", (req, res, next) => {
  const url = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); 
  Bin.create({ url })
    .then(bin => res.json(bin))
    .catch((err) => next(err));
});


// Deletes a Bin
router.delete("/bins/:id", (req, res, next) => {
  const binId = req.params.id
  Bin.findByIdAndRemove(binId)
    .then(() => {
      res.json();
    })
    .catch((err) => next(err));
});

module.exports = router;