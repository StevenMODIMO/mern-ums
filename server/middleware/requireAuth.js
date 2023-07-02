require("dotenv").config();
const jwt = require("jsonwebtoken");
const Student = require("../models/studentModel");
const Lecture = require("../models/lectureModel");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({ error: "Authorization token is required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await Student.findOne({ _id }).select("_id") || await Lecture.findOne({ _id }).select("_id")
    next();
  } catch (error) {
    res.status(400).json({ error: "Request is not authorized" });
  }
};


module.exports = requireAuth