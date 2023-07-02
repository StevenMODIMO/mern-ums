const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const lectureSchema = new mongoose.Schema({
  first_name: String,
  middle_name: String,
  last_name: String,
  level: String,
  course_instructing: String,
  email: String,
  password: String,
});

lectureSchema.statics.register = async function (
  first_name,
  middle_name,
  last_name,
  email,
  password
) {
  if (!first_name || !middle_name || !last_name || !email || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Invalid Email");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Weak Password");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("There is a user with this email");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    first_name,
    middle_name,
    last_name,
    email,
    password: hash,
  });
  return user;
};

lectureSchema.statics.level = async function (
  email,
  level,
  course_instructing
) {
  if (!email || !level || !course_instructing) {
    throw Error("All fields must be filled");
  }
  const exists = await this.findOne({ email });

  if (!exists) {
    throw Error("No such user,please register");
  }

  const admitted = await this.findOneAndUpdate(
    { email: email },
    {
      course_instructing,
      level,
    },
    { new: true }
  );

  return admitted;
};

lectureSchema.statics.login = async function (id,password) {
  if(!id || !password) {
    throw Error("Fields must not be empty.")
  }

  const user = await this.findOne({_id:id})

  if(!user) {
    throw Error("Incorrect Staff Id")
  }

  const match = await bcrypt.compare(password,user.password)

  if(!match) {
    throw Error("Incorrect Password.")
  }

  return user
}

module.exports = mongoose.model("Lecture", lectureSchema);
