const {
  registerStudent,
  checkQualification,
  admitStudent,
  loginStudent,
  getStudentInfo,
} = require("../controllers/studentControllers");
const router = require("express").Router();

router.post("/register", registerStudent);

router.post("/qualify", checkQualification);

router.post("/admit", admitStudent);

router.post("/login", loginStudent);

router.get("/info/:admission_no", getStudentInfo);

module.exports = router;
