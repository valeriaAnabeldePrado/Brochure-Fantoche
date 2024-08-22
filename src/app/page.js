import AlfaHome from "@/components/alfaHome";
import Banner from "@/components/bannerIndice/banner";
import Indice from "@/components/bannerIndice/indice";
import {
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
  page9,
} from "@/data/alfajeres";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner />
      <Indice />
      <AlfaHome products={page1} pie={1} bgPosition="top" />
      <AlfaHome products={page2} pie={2} bgPosition="bottom" />
      <AlfaHome products={page3} pie={3} bgPosition="left" />
      <AlfaHome products={page4} pie={4} bgPosition="top" />
      <AlfaHome products={page5} pie={5} bgPosition="right" />
      <AlfaHome products={page6} pie={6} bgPosition="bottom" />
      <AlfaHome products={page7} pie={7} bgPosition="left" />
      <AlfaHome products={page8} pie={8} bgPosition="top" />
      <AlfaHome products={page9} pie={9} bgPosition="right" />
    </main>
  );
}
