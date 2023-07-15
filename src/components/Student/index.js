import "./styles.css";

const Student = ({ name, age }) => {
  const urlPhoto =
    "https://ui-avatars.com/api/?size=512&background=random&color=fff&name=";
  return (
    <div className="card">
      <img src={urlPhoto + name} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{age} años</p>
      </div>
    </div>
  );
};

export default Student;
