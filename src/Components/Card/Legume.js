import "./Pain.css";

const Legume = ({ legume, addLegume, isSelected }) => {
  const { url, name } = legume;

  return (
    <div
      className="card"
      style={{
        border: isSelected
          ? "4px solid rgba(77, 3, 2, 0.24)"
          : "1px solid rgba(77, 3, 2, 0.24)",
      }}
      onClick={() => addLegume(legume)}
    >
      <img className="icone" src={url} alt={name}></img>
      <div>{name}</div>
    </div>
  );
};

export default Legume;
