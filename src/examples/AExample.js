import Footer from "../components/Footer";
import Header from "../components/Header";
import Student from "../components/Student";

const AExample = () => {
  return (
    <>
      <Header />
      <section style={{ display: "flex", justifyContent: "center" }}>
        <Student
          name={`A`}
          age={24}
          key={1}
        />
        <Student
          name={`B`}
          age={23}
          key={2}
        />
      </section>
      <Footer />
    </>
  );
};

export default AExample;
