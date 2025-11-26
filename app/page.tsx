import Header from "./components/Header";
import Hero from "./components/Hero";
import MediaWithText from "./components/MediaWithText";
import Cards from "./components/Cards";
import Slider from "./components/Slider";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";

export default async function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MediaWithText />
      <Cards />
      <Slider />
      <Contacts />
      <Footer />
    </>
  );
}
