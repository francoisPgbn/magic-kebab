import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Annuler = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const goBack = () => {
    dispatch({ type: "ANNULER" });
    history.replace("/");
  };

  return (
    <button
      style={{
        height: "40px",
        margin: "15px",
        width: "75px",
        textAlign: "center",
        fontFamily: "Incosolate",
        fontSize: "15px",
        fontWeight: "bold",
      }}
      onClick={() => goBack()}
    >
      {" "}
      Annuler{" "}
    </button>
  );
};

export default Annuler;
