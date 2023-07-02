const {
  registerLecture,
  admitLecture,
  loginLecture,
  getLectureInfo,
  getCourseStudents,
  getStudentInfo,
  catOneSemesterOne,
  catTwoSemesterOne,
  finalSemesterOne,
  catOneSemesterTwo,
  catTwoSemesterTwo,
  finalSemesterTwo,
} = require("../controllers/lectureControllers");

const requireAuth = require("../middleware/requireAuth");

const router = require("express").Router();

router.post("/register-staff", registerLecture);

router.post("/admit-staff", admitLecture);

router.post("/login-staff", loginLecture);

router.use(requireAuth);

router.get("/lecture-info/:id", getLectureInfo);

router.get("/get-students/:course", getCourseStudents);

router.get("/student-info/:id", getStudentInfo);

router.post("/cat-one-semester-one/:id", catOneSemesterOne);

router.post("/cat-two-semester-one/:id", catTwoSemesterOne);

router.post("/final-semester-one/:id", finalSemesterOne);

router.post("/cat-one-semester-two/:id", catOneSemesterTwo);

router.post("/cat-two-semester-two/:id", catTwoSemesterTwo);

router.post("/final-semester-two/:id", finalSemesterTwo);

module.exports = router;
