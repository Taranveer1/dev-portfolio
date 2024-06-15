import Home from "./Home/Home";
import Header from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import About from "./About/About";
import Footer from "./Footer/footer";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";

export default function Index() {
  return (
    <>
      <Header />
      <Sidebar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
