const express = require("express");
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const Bin = require("../models/bin")
const Request = require("../models/request")
const router = express.Router();

// Gets All Bins
router.get('/bins', (req, res, next) => {
  Bin.find({})
    .then(bins => res.json(bins))
    .catch(next);
})

// Gets A Bin By Id
router.get("/bins/:id", (req, res, next) => {
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
  console.log('within the Delete Route')
  Bin.findByIdAndRemove(binId)
    .then(bin => {
      res.json(`Successfully Deleted Bin: ${bin.url}`);
    })
    .catch((err) => next(err));
});

module.exports = router;