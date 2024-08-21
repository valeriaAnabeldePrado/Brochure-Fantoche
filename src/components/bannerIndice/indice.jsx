import React from "react";
import { Abril_Fatface } from "next/font/google";
import "./bannerIndice.css";
import Image from "next/image";

// Importa la fuente
const abrilFatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });

const Indice = () => {
  const indice = ["Budines", "Pan dulce", "Confituras"];

  return (
    <div className="cont-indice h-screen w-full">
      <section className="cont-indice-rectangulo">
        <ul>
          {indice.map((el, indice) => (
            <div key={indice}>
              <li className={`letter-indice ${abrilFatface.className}`}>
                {el}
              </li>
              <div className="line"></div>
            </div>
          ))}
        </ul>
      </section>
      <Image
        src={"/alfajer.png"}
        width={300}
        height={300}
        className="imagen-ab"
      />
    </div>
  );
};

export default Indice;
