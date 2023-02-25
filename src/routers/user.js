const express = require("express")
const router = express.Router()
const usersController = require("../controller/usersController")

router.post('/',usersController.user_create)
router.get('/', usersController.user_all)
router.get('/:userId', usersController.user_details)
router.put('/:userId', usersController.user_update)
router.delete('/:userId', usersController.user_delete)

module.exports = router;