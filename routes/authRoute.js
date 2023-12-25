import express from 'express'
import { registerController, testController, loginController, forgetPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController } from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';


// router object

const router = express.Router()

// routing 
// Register || method Post

router.post('/register', registerController);

// login || post

router.post('/login', loginController);

// forget password

router.post('/forget-password', forgetPasswordController)

// test router

router.get('/test', requireSignIn, isAdmin, testController);

// protected user route auth
router.get('/user-auth', requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// protected admin  route auth
router.get('/admin-auth', requireSignIn, isAdmin, (req, res,) => {
  res.status(200).send({ ok: true });
});
// update user  profile
router.put('/profile', requireSignIn, updateProfileController);

// order
router.get('/orders', requireSignIn, getOrdersController);

// all orders
router.get('/all-orders', requireSignIn, isAdmin, getAllOrdersController);
// order status update
router.get('/order-status/:orderId', requireSignIn, isAdmin, orderStatusController);
export default router