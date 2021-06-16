const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Contact = require("../models/Contact");
const Ceh = require("../models/Ceh");
const sendEmail = require("../utils/sendEmail");

// @desc    Create Contact/
// @route   POST/api/v1/auth/Contact/register
// @access   Private/Contact
exports.createContact = asyncHandler(async (req, res, next) => {
  const message = `Dear Team, ${req.body.name} just filled the cotact form, \n\n Name: ${req.body.name}
  \n\n Email: ${req.body.email}\n\n Mobile: ${req.body.mobile}\n\n Subject: ${req.body.subject}\n\n Message: ${req.body.message}`;

  try {
    await sendEmail({
      email: "iyaki@lotusbetaanalytics.com",
      subject: "Contact Page",
      cc: "ayomide@lotusbetaanalytics.com",
      message,
    });
    const contact = await Contact.create(req.body);
    res.status(200).json({
      success: true,
      data: "Message sent successfully",
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Message could not be sent", 500));
  }
});

// @desc    Create Contact/
// @route   POST/api/v1/auth/Contact/register
// @access   Private/Contact
exports.cehRegistration = asyncHandler(async (req, res, next) => {
  const message = `Dear Team, ${req.body.firstname}  ${req.body.lastname}just registered for CEH, \n\n Firstname: ${req.body.firstname} \n\n Lastname: ${req.body.lastname}
  \n\n Email: ${req.body.email}\n\n Mobile: ${req.body.mobile}\n\n Country: ${req.body.country}\n\n Intrest: ${req.body.intrest} \n\n Training: ${req.body.training}`;

  try {
    await sendEmail({
      email: "iyaki@lotusbetaanalytics.com",
      subject: "CEH",
      cc: "ayomide@lotusbetaanalytics.com",
      message,
    });
    const ceh = await Ceh.create(req.body);
    res.status(200).json({
      success: true,
      data: ceh,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Message could not be sent", 500));
  }
});
