import "./styles.css";

const Student = ({ name, age, email, phone, address }) => {
  const urlPhoto =
    "https://ui-avatars.com/api/?size=512&background=0D8ABC&color=fff&name=";
  return (
    <div className="card">
      <img src={urlPhoto + name} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{age} años</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default Student;
