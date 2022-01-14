const router = require('express').Router();
const {
	getSingleUser,
	saveOrder,
	login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').put(authMiddleware, saveOrder);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

// router.route('/orders/:orderId').delete(authMiddleware, deleteOrder);

module.exports = router;
