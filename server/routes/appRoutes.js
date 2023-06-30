const { registerStudent,checkQualification,admitStudent, loginUser } = require("../controllers/appControllers")
const router = require("express").Router()

router.post("/register", registerStudent)

router.post("/qualify",checkQualification)

router.post("/admit",admitStudent)

router.post("/login", loginUser)

module.exports = router