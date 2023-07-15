import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Student from "./components/Student";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <section style={{ display: "flex", justifyContent: "center" }}>
        <Student
        name={`A`}
        age={24}
        email={"agarciadarce@gmail.com"}
        phone={"81380937"}
        address={"Undefined"}
        key={1}
      />
       <Student
        name={`B`}
        age={23}
        email={"agarciadarce@gmail.com"}
        phone={"81380937"}
        address={"Undefined"}
        key={2}
      />
      </section>
      <Footer />
    </>
  );
}

export default App;
