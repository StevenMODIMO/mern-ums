const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  first_name: String,
  middle_name: String,
  last_name: String,
  email: String,
  password: String,
  admission_no: String,
  course: String,
  enrolled: { type: Boolean, default: false },
});

studentSchema.statics.register = async function (
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

studentSchema.statics.qualify = async function (email, grade) {
  if (!email || !grade) {
    throw Error("All fields must be filled");
  }
  const exists = await this.findOne({ email });

  if (!exists) {
    throw Error("No such user,please register");
  }

  if(exists.enrolled) {
    return {error: "This user is already enrolled, please login"}
  }
  
  if (grade == "A" || grade == "B" || grade == "C") {
    return { id: exists._id};
  } else {
    throw Error("You do not meet the requirements");
  }
};

studentSchema.statics.admit = async function (admission_no, email, course) {
  if (!admission_no || !email || !course) {
    throw Error("All fields must be filled");
  }
  const exists = await this.findOne({ email });

  if (!exists) {
    throw Error("No such user,please register");
  }

  const admitted = await this.findOneAndUpdate(
    { email: email },
    {
      admission_no,
      course,
      enrolled: true,
    },
    { new: true }
  );

  return admitted;
};

studentSchema.statics.login = async function (admission_no, password) {
  if (!admission_no || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ admission_no });

  if (!user) {
    throw Error("Invalid Admission Number");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect Password");
  }

  return user;
};

module.exports = mongoose.model("Student", studentSchema);
