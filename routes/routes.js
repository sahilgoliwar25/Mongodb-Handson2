const userRoutes = require("./userRoutes");
const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/createusers", userController.addNewUser);
router.get("/query1", userController.query1);
router.get("/query2", userController.query2);
router.get("/query3", userController.query3);
router.get("/query4", userController.query4);
router.get("/query5", userController.updateUser);
router.get("/query6", userController.deleteUser);

module.exports = router;
