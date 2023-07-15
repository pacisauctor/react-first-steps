// StudentForm.js

import React, { useState } from 'react';
import './styles.css';

const StudentForm = ({ addStudent }) => {
  const [newStudent, setNewStudent] = useState({
    name: '',
    age: ''
  });

  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(newStudent);
    setNewStudent({
      name: '',
      age: ''
    });
  };

  return (
    <section className='form-section'>
    <form onSubmit={handleSubmit} className='student-form'>
      <input
        type="text"
        name="name"
        value={newStudent.name}
        placeholder="Nombre"
        className='form-input'
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={newStudent.age}
        placeholder="Edad"
        className='form-input'
        onChange={handleChange}
      />
      
      <button type="submit" className='form-button'>Agregar Estudiante</button>
    </form>
  </section>
  );
};

export default StudentForm;
