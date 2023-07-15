import React, { useEffect, useMemo, useState, useCallback } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Student from "../components/Student";
import StudentForm from "../components/StudentForm";

const FExample = () => {
  const [students, setStudents] = useState([]);

  const sortStudents = useMemo(() => {
    return students.sort((a, b) => a.name.localeCompare(b.name));
  }, [students]);

  const addStudent = useCallback(
    (newStudent) => {
      setStudents([...students, newStudent]);
    },
    [students]
  );

  useEffect(() => {
    console.log(students);
  }, [students]);

  return (
    <>
      <Header />

      <StudentForm addStudent={addStudent} />
      <section
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {sortStudents.map((student, index) => (
          <Student name={student.name} age={student.age} key={index} />
        ))}
      </section>
      <Footer />
    </>
  );
};

export default FExample;
