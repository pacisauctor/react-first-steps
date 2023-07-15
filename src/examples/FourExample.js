// FourExample.js

import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Student from "../components/Student";
import StudentForm from "../components/StudentForm";

const FourExample = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  useEffect(() => {
    console.log(students);
  }, [students]);



  return (
    <>
      <Header />

      <StudentForm addStudent={addStudent} />
      <section style={{ display: "flex", justifyContent: "center" }}>
        {students.map((student, index) => (
          <Student
            name={student.name}
            age={student.age}
            key={index}
          />
        ))}
      </section>
      <Footer />
    </>
  );
};

export default FourExample;
