const Bin = require("../models/bin")
const Request = require("../models/request")

// Gets All Requests
const getAllRequests = (req, res, next) => {
  Request.find({})
    .sort({ updatedAt: -1})
    .then(requests => res.json(requests))
    .catch(next);
}

// Delete All Requests
const deleteAllRequests = (req, res, next) => {
  Request.deleteMany({})
    .then(() => res.json(`Successfully Deleted All Requests`))
    .catch(next);
}

// Adds a Request to a Bin
const addRequest = async (req, res, next) => {
  const url = req.params.url

  const headers = req.headers;
  const method = req.method;
  const body = req.body;

  // Fetch the binId based on the URL
  let binId;
  await Bin.findOne({ url })
    .then(bin => {
      binId = bin.id
    })
  
  // Create the Request Information
  Request.create({ binId, url, headers, method, body })
    .then(request => {
      // Add the Request to the Bin Request Array
      Bin.findByIdAndUpdate(request.binId, { $push: {requests: request._id }}, () => {})
      res.json(request)
    })
    .catch((err) => next(err));
}

// Gets All Requests For a Bin
const getRequestsByBin = async (req, res, next) => { 
  const url = req.params.url
  let binId;
  await Bin.findOne({ url })
    .then(bin => {
      binId = bin.id
    })

  Request.find({ binId })
    .then(requests => res.json(requests))
    .catch((err) => next(err));
}

const requestController = {
  getAllRequests,
  deleteAllRequests,
  addRequest,
  getRequestsByBin
}

module.exports = requestController
