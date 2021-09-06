const express = require('express');
const { createNeedHandForm } = require("../controllers/contact");

const router = express.Router();

router.route('/').post(createNeedHandForm);

module.exports = router;