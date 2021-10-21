import "./Pain.css";

const Pain = ({ pain, addPain }) => {
  const { url, name } = pain;

  return (
    <div className="card" onClick={() => addPain(pain)}>
      <img height="200px" src={url} alt={name}></img>
      <div> {name}</div>
    </div>
  );
};

export default Pain;
