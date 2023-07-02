import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom"

export default function Dashboard() {
  const [lectureInfo, setLectureInfo] = useState({});
  const [studentInfo, setStudentInfo] = useState({});
  const [courseStudents,setCourseStudents] = useState([])
  const { user, dispatch } = useAuth();
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    const id = user.id;
    const getLectureInfo = async () => {
      const response = await fetch(
        `http://localhost:5000/api/app/lecture/info/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const json = await response.json();
      
      if (response.ok) {
        setLectureInfo(json);
      } else {
        console.log(json.error);
      }
    };

    const getStudentInfo = async () => {
      const admission_no = user.admission_no;
      const response = await fetch(
        `http://localhost:5000/api/app/student/info/${admission_no}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const json = await response.json();

      if (response.ok) {
        setStudentInfo(json);
      } else {
        console.log(json.error);
      }
    };

    const getCourseStudents = async() => {
      const response = await fetch(`http://localhost:5000/api/app/lecture/get-students/${lectureInfo.course_instructing}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        }
      })

      const json = await response.json();

      if (response.ok) {
        setCourseStudents(json);
      } else {
        console.log(json.error);
      }
    }


    user.id && getLectureInfo();
    user.id && getCourseStudents()
    user.admission_no && getStudentInfo();
  }, []);
  return (
    <main>
      <header className="flex justify-end m-1">
        <button onClick={logout}>Logout</button>
      </header>
      {user.admission_no ? (
        <section>
          <header>
            <div className="flex">
              <h1>{studentInfo.first_name}</h1>
              <h1>{studentInfo.middle_name}</h1>
              <h1>{studentInfo.last_name}</h1>
              <h1>{studentInfo.course}</h1>
              <h1>{studentInfo.admission_no}</h1>
            </div>
            <div></div>
          </header>
        </section>
      ) : (
        <section>
          <header>
            <div className="flex gap-3">
              <h1>{lectureInfo.first_name}</h1>
              <h1>{lectureInfo.middle_name}</h1>
              <h1>{lectureInfo.last_name}</h1>
              <h1>{lectureInfo.course_instructing}</h1>
              <h1>{lectureInfo.level}</h1>
            </div>
          </header>
            <div>
              <h1>Your Students</h1>
              {courseStudents.map(sc => {
                return (
                  <div key={sc._id}>
                    <h1>{sc.email}</h1>
                    <NavLink to={`/view/${sc._id}`}>Manage</NavLink>
                  </div> 
                )
              })}
            </div>
        </section>
      )}
    </main>
  );
}
