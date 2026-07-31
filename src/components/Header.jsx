import Hero from "./Hero";
import Navbar from "./Navbar";
import { heroBottom } from "@/lib/images.js";
import Product from "./Product";

function Header() {
  return (
    <header
      id="home"
      className="bg-hero-gradient h-screen max-h-170 w-full min-h-max flex flex-col  relative overflow-hidden"
    >
      <Navbar />
      <Hero />
      <img src={heroBottom} alt="" className="w-full sm:-mt-24" />
    </header>
  );
}

export default Header;
