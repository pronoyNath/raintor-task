import Banner from "../../components/Home/Banner";
import Contact from "../../components/Home/Contact";
import Experience from "../../components/Home/Experience";
import SkillSection from "../../components/Home/SkillSection";
import WorkProccess from "../../components/Home/WorkProcess";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className=" min-h-screen pt-12 md:pt-0 mx-auto bg-[url('/bannar.png')] bg-center bg-cover">
        <div className="container">
          <Navbar />
          <Banner />
        </div>
      </div>
      <div className="">
        <SkillSection />
        <Experience />
        <WorkProccess />
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
