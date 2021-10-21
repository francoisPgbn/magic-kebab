import "./Pain.css";

const Recap = ({ checkout }) => {
  const { url, name } = checkout;

  return (
    <div
      className="card"
      style={{
        border: "1px solid rgba(77, 3, 2, 0.24)",
      }}
    >
      <img className="icone" src={url} alt={name}></img>
      <div>{name}</div>
    </div>
  );
};

export default Recap;
