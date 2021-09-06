const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Enrollment = require("../models/Enrollment");
const request = require("request");

// @desc   Onboard User
// @route   POST/api/onboard
// @access   Public
exports.onboardUser = asyncHandler(async (req, res, next) => {
  const { firstname, lastname, email, pin } = req.body;
  const name = firstname + " " + lastname;
  const formData = {
    media1: req.body.media1,
    media2: req.body.media2,
    name: name,
  };

  var options = {
    method: "POST",
    url: "https://lotusfaceapi.herokuapp.com/upload",
    headers: { "content-type": "application/json" },
    json: formData,
  };

  request(options, (err, { statusCode }, body) => {
    if (statusCode === 200) {
      if (body.success) {
        const enroll = Enrollment.create(req.body);
        res.status(201).json({
          success: true,
          data: enroll,
        });
      } else {
        res.status(400).json({
          success: false,
          error: "User Already Registered",
        });
      }

      //                 ;
    } else {
    }
  });
});
