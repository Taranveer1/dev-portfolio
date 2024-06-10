import Home from "./Home";
import Header from "./Header";
import Sidebar from "./Sidebar";
import About from "./About";
import Footer from "./footer";
import Experience from "./Experience";


export default function Index() {
  return (
    <>
      <Header/>
      <Sidebar/>
      <Home />
      <About/>
      <Experience/>
      <Footer/>
    </>
  );
}