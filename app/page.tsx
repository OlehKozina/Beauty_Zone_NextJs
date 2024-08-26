import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Why from "./components/Why";
import Procedures from "./components/Procedures";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default async function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Why />
      <Procedures />
      <Contacts />
      <Footer />
    </>
  );
}
