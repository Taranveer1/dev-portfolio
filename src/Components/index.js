import Home from "./Home/Home";
import Header from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import About from "./About/About";
import Footer from "./Footer/footer";
// import Experience from "./About/Experience/Experience";


export default function Index() {
  return (
    <>
      <Header/>
      <Sidebar/>
      <Home />
      <About/>
      {/* <Experience/> */}
      <Footer/>
    </>
  );
}