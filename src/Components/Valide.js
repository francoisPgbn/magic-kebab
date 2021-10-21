import React from "react";
import Header from "./Header";

function Valide() {
  return (
    <div className="App">
      <div className="Center">
        <Header />
        <div className="Main">
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            C'est parti!
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Notre maître kébabier prépare votre commande!
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Patience...
          </div>
        </div>
      </div>
    </div>
  );
}

export default Valide;
