const Lecture = require("../models/lectureModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

const registerLecture = async (req, res) => {
  const { first_name, middle_name, last_name, email, password } = req.body;
  try {
    const user = await Lecture.register(
      first_name,
      middle_name,
      last_name,
      email,
      password
    );
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const admitLecture = async (req, res) => {
  const { email, level, course_instructing, staff_id } = req.body;
  try {
    const admitted = await Lecture.level(
      email,
      level,
      course_instructing,
      staff_id
    );
    res.status(200).json(admitted);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginStudent = async (req, res) => {
  const { id, password } = req.body;
  try {
    const user = await Lecture.login(id, password);
    const token = createToken(user._id);
    res.status(200).json({ id, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  registerLecture,
  admitLecture,
  loginStudent
};
