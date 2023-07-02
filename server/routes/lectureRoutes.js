const {
  registerLecture,
  admitLecture,
  loginStudent,
} = require("../controllers/lectureControllers");

const router = require("express").Router();

router.post("/register-staff", registerLecture);

router.post("/admit-staff", admitLecture);

router.post("/login-staff", loginStudent);

module.exports = router;
