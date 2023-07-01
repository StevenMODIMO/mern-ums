const {
  registerStudent,
  checkQualification,
  admitStudent,
  registerLecture,
  admitLecture,
} = require("../controllers/appControllers");
const router = require("express").Router();

router.post("/register", registerStudent);

router.post("/qualify", checkQualification);

router.post("/admit", admitStudent);

router.post("/register-staff",registerLecture)

router.post("/admit-staff",admitLecture)

module.exports = router;
