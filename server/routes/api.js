const express = require ('express');
const router = express.Router();

const binController = require("../controllers/binController");
const requestController = require("../controllers/requestController");

// Bins
router.get('/bins', binController.getAllBins);
router.delete("/bins/", binController.deleteAllBins);

router.get("/bins/:id", binController.getBin);
router.post("/bins", binController.createBin);
router.delete("/bins/:id", binController.deleteBin);

// Requests
router.get('/requests', requestController.getAllRequests);
router.delete('/requests', requestController.deleteAllRequests);

router.post("/bins/:url", requestController.addRequest);
router.get("/bins/requests/:url", requestController.getRequestsByBin);

module.exports = router;