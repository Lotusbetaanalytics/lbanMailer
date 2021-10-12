const express = require("express");
const {
  createContact,
  cehRegistration,
  isv,
} = require("../controllers/contact");

const router = express.Router();

router.route("/").post(createContact);
router.route("/ceh").post(cehRegistration);
router.route("/isv").post(isv);

module.exports = router;
