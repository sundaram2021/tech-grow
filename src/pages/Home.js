import "../CSS/navbar.css";
import "../CSS/Hero.css";
import "../CSS/faculties.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Faculties from "../components/Faculties";
import Footer from "../components/Footer";

const Home = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <Faculties />
      <Footer />
    </>
  );
};

export default Home;
