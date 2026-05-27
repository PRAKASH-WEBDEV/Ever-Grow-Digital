const express = require("express");

const router = express.Router();

const {
  sendContactMail,
} = require("../controllers/contactController");

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Contact API is running",
  });
});

router.post("/", sendContactMail);

module.exports = router;
