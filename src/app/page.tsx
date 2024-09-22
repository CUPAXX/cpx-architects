import { Navbar } from "@components/Navbar/Navbar";
import Image from "next/image";
import mainBanner from "@assets/main-banner.jpg";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="relative w-full h-[41rem]">
        <Image src={mainBanner} fill sizes="100vw" alt="main banner" />
      </section>
    </div>
  );
}
