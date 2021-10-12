const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Contact = require("../models/Contact");
const NeedHand = require("../models/NeedHand");
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
  \n\n Email: ${req.body.email}\n\n Mobile: ${req.body.mobile}\n\n Country: ${req.body.country}\n\n Intrest: ${req.body.intrest} \n\n Training: ${req.body.training}  \n\n Organization: ${req.body.company}  \n\n Job Role: ${req.body.role}`;
  const ceh = await Ceh.create(req.body);
  res.status(200).json({
    success: true,
    data: ceh,
  });
  try {
    await sendEmail({
      email: "iyaki@lotusbetaanalytics.com",
      subject: "CEH",
      cc: "ayomide@lotusbetaanalytics.com",
      message,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Message could not be sent", 500));
  }
});

exports.createNeedHandForm = asyncHandler(async (req, res, next) => {
  const message = `Dear Team, ${req.body.name} just filled the Need-a-hand form, \n\n Name: ${req.body.name}
  \n\n Email: ${req.body.email}\n\n Subject: ${req.body.subject}\n\n Message: ${req.body.message}`;

  try {
    await sendEmail({
      email: "iyaki@lotusbetaanalytics.com",
      subject: "Contact Page",
      cc: "ayomide@lotusbetaanalytics.com",
      message: message,
    });
    const needHand = await NeedHand.create(req.body);
    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Message could not be sent", 500));
  }
});

exports.isv = asyncHandler(async (req, res, next) => {
  const message = `Dear Team, ${req.body.firstname}, \n\n Name: ${req.body.firstname} ${req.body.lastname}
  \n\n Email: ${req.body.email}\n\n Business Name: ${req.body.businessName}\n\n Role: ${req.body.role}, Mobile: ${req.body.mobile}`;
  try {
    await sendEmail({
      email: "isv@lotusbetaanalytics.com",
      subject: "ISV Page",
      message: message,
    });
    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Message could not be sent", 500));
  }
});
