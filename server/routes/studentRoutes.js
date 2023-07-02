const {
  registerStudent,
  checkQualification,
  admitStudent,
  loginStudent
} = require("../controllers/studentControllers");
const router = require("express").Router();

router.post("/register", registerStudent);

router.post("/qualify", checkQualification);

router.post("/admit", admitStudent);

router.post("/login", loginStudent);

module.exports = router;
