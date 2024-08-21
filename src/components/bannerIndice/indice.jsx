import React from "react";
import { Abril_Fatface } from "next/font/google";
import "./bannerIndice.css";

// Importa la fuente
const abrilFatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });

const Indice = () => {
  const indice = ["Budines", "Pan dulce", "Confituras"];

  return (
    <div className="cont-indice h-screen w-full">
      <section className="cont-indice-rectangulo">
        <ul>
          {indice.map((el, indice) => (
            <li
              className={`letter-indice ${abrilFatface.className}`}
              key={indice}
            >
              {el}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Indice;
