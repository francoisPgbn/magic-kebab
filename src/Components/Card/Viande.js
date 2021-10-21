import "./Pain.css";

const viande = ({ viande, addViande }) => {
  const { url, name } = viande;

  return (
    <div className="card" onClick={() => addViande(viande)}>
      <img height="200px" src={url} alt={name}></img>
      <div> {name}</div>
    </div>
  );
};

export default viande;
