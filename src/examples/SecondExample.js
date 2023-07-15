import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Student from '../components/Student';

const SecondExample = () => {
  const students = [
    {
      name: 'A',
      age: 24,
      key: 1,
    },
    {
      name: 'B',
      age: 23,
      key: 2,
    },
  ];

  return (
    <>
      <Header />
      <section style={{ display: 'flex', justifyContent: 'center' }}>
        {students.map((student) => (
          <Student
            name={student.name}
            age={student.age}
            key={student.key}
          />
        ))}
      </section>
      <Footer />
    </>
  );
};

export default SecondExample;
