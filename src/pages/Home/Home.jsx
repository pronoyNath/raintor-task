import Banner from "../../components/Home/Banner";
import SkillSection from "../../components/Home/SkillSection";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div className="">
      <div className=" min-h-screen pt-12 md:pt-0 mx-auto bg-[url('/bannar.png')] bg-center bg-cover">
        <div className="container">
          <Navbar />
          <Banner />
        </div>
      </div>
      <div className="container">
        <SkillSection />
      </div>
    </div>
  );
};

export default Home;
