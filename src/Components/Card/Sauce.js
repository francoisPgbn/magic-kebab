import "./Pain.css";

const Sauce = ({ sauce, addSauce, isSelected }) => {
  const { url, name } = sauce;

  return (
    <div
      className="card"
      style={{
        border: isSelected
          ? "4px solid rgba(77, 3, 2, 0.24)"
          : "1px solid rgba(77, 3, 2, 0.24)",
      }}
      onClick={() => addSauce(sauce)}
    >
      <img className="icone" src={url} alt={name}></img>
      <div>{name}</div>
    </div>
  );
};

export default Sauce;
