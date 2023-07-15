import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Student from '../components/Student';

const CExample = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: '',
    age: ''
  });

  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, newStudent]);
    setNewStudent({
      name: '',
      age: ''
    });
  };

  return (
    <>
      <Header />
      <section style={{ display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={newStudent.name}
            placeholder="Nombre"
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            value={newStudent.age}
            placeholder="Edad"
            onChange={handleChange}
          />
          
          <button type="submit">Agregar Estudiante</button>
        </form>
      </section>
      <section style={{ display: 'flex', justifyContent: 'center' }}>
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

export default CExample;
