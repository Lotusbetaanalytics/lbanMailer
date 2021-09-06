const express = require("express");
const { onboardUser } = require("../controllers/enrollment");

const router = express.Router();

router.route("/onboard").post(onboardUser);

module.exports = router;
