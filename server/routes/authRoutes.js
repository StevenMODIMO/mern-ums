const { registerStudent,checkQualification,admitStudent, loginUser } = require("../controllers/authControllers")
const router = require("express").Router()

router.post("/signup", registerStudent)

router.post("/qualify",checkQualification)

router.post("/admit",admitStudent)

router.post("/login", loginUser)

module.exports = router