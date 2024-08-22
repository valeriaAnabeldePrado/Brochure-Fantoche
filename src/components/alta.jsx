import { Abril_Fatface } from "next/font/google";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

// Configura la fuente
const freckleFace = Abril_Fatface({
  subsets: ["latin"],
  weight: "400", // Especifica el peso disponible
});

const ProductCard = ({ image, title, weight, ean, code }) => {
  return (
    <div className="text-4xl font-bold flex flex-col items-center gap-14">
      <h2
        className={`${freckleFace.className} w-full text-center text-amber-700`}
      >
        {code}
      </h2>
      <div className="relative h-[250px] w-[350px] ">
        <Image
          src={image}
          alt={title}
          fill
          className="align-middle object-scale-down"
        />
      </div>
      <div className="flex items-center">
        <div>
          <IoIosArrowForward className="size-14" />
        </div>
        <div className="">
          <h1 className={`${freckleFace.className} text-amber-700 max-w-72 `}>
            {title}
          </h1>
          <p className="text-2xl">{weight}</p>
          <p className="text-2xl">{ean}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
