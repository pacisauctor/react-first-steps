import React, { useMemo, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Student from "../components/Student";
import StudentForm from "../components/StudentForm";

const EExample = () => {
  const [students, setStudents] = useState([]);

  const sortStudents = useMemo(() => {
    return students.sort((a, b) => a.name.localeCompare(b.name));
  }, [students]);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <>
      <Header />

      <StudentForm addStudent={addStudent} />
      <section style={{ display: "flex", justifyContent: "center" }}>
        {sortStudents.map((student, index) => (
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

export default EExample;
