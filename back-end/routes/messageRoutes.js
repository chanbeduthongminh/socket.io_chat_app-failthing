const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { sendMessage, allMessage } = require("../controllers/sendMessage");

const router = express.Router();

router.route("/").post(protect, sendMessage);
router.route("/:chatId").get(protect, allMessage);

module.exports = router;
