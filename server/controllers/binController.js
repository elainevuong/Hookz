const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const Bin = require("../models/bin")
const Request = require("../models/request")

// Gets All Bins
const getAllBins = (req, res, next) => {
  Bin.find({})
    .then(bins => res.json(bins))
    .catch(next);
}

// Deletes All Bins
const deleteAllBins = (req, res, next) => {
  Bin.deleteMany({})
    .then(() => res.json(`Successfully Deleted All Bins`))
    .catch((err) => next(err));
}

// Gets A Bin By Id
const getBin = (req, res, next) => {
  const binId = req.params.id
  Bin.findById(binId)
    .then(bin => res.json(bin))
    .catch(next);
}

// Creates a New Bin
const createBin = (req, res, next) => {
  const url = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); 
  Bin.create({ url })
    .then(bin => res.json(bin))
    .catch((err) => next(err));
};

// Deletes a Bin
const deleteBin = (req, res, next) => {
  const binId = req.params.id

  // Deletes all Requests for a Bin
  Request.deleteMany({ binId })
    .then(() => {
      // Deletes the Bin
      Bin.findByIdAndRemove(binId)
        .then(bin => res.json(`Successfully Deleted Bin: ${bin.url}`))
    })
    .catch((err) => next(err));
};

const binController = {
  getAllBins,
  deleteAllBins,
  getBin,
  createBin,
  deleteBin
}

module.exports = binController