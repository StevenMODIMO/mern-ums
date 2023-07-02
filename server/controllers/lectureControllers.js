const Lecture = require("../models/lectureModel");
const Student = require("../models/studentModel");
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

const loginLecture = async (req, res) => {
  const { id, password } = req.body;
  try {
    const user = await Lecture.login(id, password);
    const token = createToken(user._id);
    res.status(200).json({ id, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getLectureInfo = async (req, res) => {
  const { id } = req.params;
  try {
    const profileInfo = await Lecture.findOne({ _id: id });
    res.status(200).json(profileInfo);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getCourseStudents = async (req, res) => {
  const { course } = req.params;
  try {
    const courseStudents = await Student.find();
    const filterByCourse = courseStudents.filter(
      (student) => student.course === course
    );
    res.status(200).json(filterByCourse);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getStudentInfo = async (req, res) => {
  const { id } = req.params;
  try {
    const studentInfo = await Student.findOne({ _id: id });
    res.status(200).json(studentInfo);
  } catch (error) {
    res.status(400).json(error);
  }
};

const catOneSemesterOne = async (req, res) => {
  const { id } = req.params;
  const { score, score1, score2, score3, score4 } = req.body;

  if (!score || !score1 || !score2 || !score3 || !score4) {
    return res.status(400).json({ error: "All scores must be filled" });
  }
  try {
    const uploadScores = await Student.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          modules: {
            module1: {
              semester_one: {
                cat_one: score
              }
            },
            module2: {
              semester_one: {
                cat_one: score1
              }
            },
            module3: {
              semester_one: {
                cat_one: score2
              }
            },
            module4: {
              semester_one: {
                cat_one: score3
              }
            },
            module5: {
              semester_one: {
                cat_one: score4
              }
            }
          },
        },
      },
      { new: true }
    );
    res.status(200).json(uploadScores)
  } catch (error) {
    res.status(400).json(error);
  }
};

const catTwoSemesterOne = async (req, res) => {
  const { id } = req.params;
  const { score, score1, score2, score3, score4 } = req.body;

  if (!score || !score1 || !score2 || !score3 || !score4) {
    return res.status(400).json({ error: "All scores must be filled" });
  }
  try {
    const uploadScores = await Student.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          modules: {
            module1: {
              semester_one: {
                cat_two: score
              }
            },
            module2: {
              semester_one: {
                cat_two: score1
              }
            },
            module3: {
              semester_one: {
                cat_two: score2
              }
            },
            module4: {
              semester_one: {
                cat_two: score3
              }
            },
            module5: {
              semester_one: {
                cat_two: score4
              }
            }
          },
        },
      },
      { new: true }
    );
    res.status(200).json(uploadScores)
  } catch (error) {
    res.status(400).json(error);
  }
};

const finalSemesterOne = async (req, res) => {
  const { id } = req.params;
  const { score, score1, score2, score3, score4 } = req.body;

  if (!score || !score1 || !score2 || !score3 || !score4) {
    return res.status(400).json({ error: "All scores must be filled" });
  }
  try {
    const uploadScores = await Student.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          modules: {
            module1: {
              semester_one: {
                final: score
              }
            },
            module2: {
              semester_one: {
                final: score1
              }
            },
            module3: {
              semester_one: {
                final: score2
              }
            },
            module4: {
              semester_one: {
                final: score3
              }
            },
            module5: {
              semester_one: {
                final: score4
              }
            }
          },
        },
      },
      { new: true }
    );
    res.status(200).json(uploadScores)
  } catch (error) {
    res.status(400).json(error);
  }
};

const catOneSemesterTwo = async (req, res) => {
  const { id } = req.params;
  const { score, score1, score2, score3, score4 } = req.body;

  if (!score || !score1 || !score2 || !score3 || !score4) {
    return res.status(400).json({ error: "All scores must be filled" });
  }
  try {
    const uploadScores = await Student.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          modules: {
            module1: {
              semester_two: {
                cat_one: score
              }
            },
            module2: {
              semester_two: {
                cat_one: score1
              }
            },
            module3: {
              semester_two: {
                cat_one: score2
              }
            },
            module4: {
              semester_two: {
                cat_one: score3
              }
            },
            module5: {
              semester_two: {
                cat_one: score4
              }
            }
          },
        },
      },
      { new: true }
    );
    res.status(200).json(uploadScores)
  } catch (error) {
    res.status(400).json(error);
  }
};

const catTwoSemesterTwo = async (req, res) => {
  const { id } = req.params;
  const { score, score1, score2, score3, score4 } = req.body;

  if (!score || !score1 || !score2 || !score3 || !score4) {
    return res.status(400).json({ error: "All scores must be filled" });
  }
  try {
    const uploadScores = await Student.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          modules: {
            module1: {
              semester_two: {
                cat_two: score
              }
            },
            module2: {
              semester_two: {
                cat_two: score1
              }
            },
            module3: {
              semester_two: {
                cat_two: score2
              }
            },
            module4: {
              semester_two: {
                cat_two: score3
              }
            },
            module5: {
              semester_two: {
                cat_two: score4
              }
            }
          },
        },
      },
      { new: true }
    );
    res.status(200).json(uploadScores)
  } catch (error) {
    res.status(400).json(error);
  }
};

const finalSemesterTwo = async (req, res) => {
  const { id } = req.params;
  const { score, score1, score2, score3, score4 } = req.body;

  if (!score || !score1 || !score2 || !score3 || !score4) {
    return res.status(400).json({ error: "All scores must be filled" });
  }
  try {
    const uploadScores = await Student.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          modules: {
            module1: {
              semester_two: {
                final: score
              }
            },
            module2: {
              semester_two: {
                final: score1
              }
            },
            module3: {
              semester_two: {
                final: score2
              }
            },
            module4: {
              semester_two: {
                final: score3
              }
            },
            module5: {
              semester_two: {
                final: score4
              }
            }
          },
        },
      },
      { new: true }
    );
    res.status(200).json(uploadScores)
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
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
  finalSemesterTwo
};
