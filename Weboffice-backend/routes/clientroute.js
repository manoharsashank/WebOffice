const express = require("express");
const router = express.Router();
const { addclient } = require("../controllers/clients/addClientcontroller");
const { getclient } = require("../controllers/clients/getClientcontroller");
const { deleteclient } = require("../controllers/clients/deleteClientcontroller");
const { editclient } = require("../controllers/clients/editClientcontroller");
router.post("/addclient/:id", addclient);
router.get("/getclient/:id", getclient);
router.get("/deleteclient/:id", deleteclient);
router.post("/editclient/:id", editclient);
module.exports = router;
