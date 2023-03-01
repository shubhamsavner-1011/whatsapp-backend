const express = require("express");
const {addMessages, getMessages} = require("../controller/messageController")
const router = express.Router()

router.post('/',addMessages)
router.get('/:chatId', getMessages)


module.exports = router;