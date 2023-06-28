const Student = require("../models/studentModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "30d" });
  };
  
  const registerStudent = async (req, res) => {
    const { first_name,middle_name,last_name,email, password } = req.body;
    try {
      const user = await Student.register(first_name,middle_name,last_name,email, password);
      const token = createToken(user._id);
      const id = user.id;
      res.status(200).json({ user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const checkQualification = async(req, res) => {
    const { email,grade } = req.body
    try {
      const info = await Student.qualify(email,grade)
      res.status(200).json(info)
    } catch(error) {
      res.status(400).json({error: error.message})
    }
  }

  const admitStudent = async(req,res) => {
    const { admission_no, email, course } = req.body
    try {
      const admitted = await Student.admit(admission_no,email,course)
      res.status(200).json(admitted)
    } catch(error) {
      res.status(400).json({error: error.message})
    }
  }
  
  const loginUser = async (req, res) => {
    const { admission_no, password } = req.body;
    try {
      const user = await Student.login(admission_no, password);
      const token = createToken(user._id);
      res.status(200).json({ admission_no, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = { registerStudent,checkQualification,admitStudent, loginUser };