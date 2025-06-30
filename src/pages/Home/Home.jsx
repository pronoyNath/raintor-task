import { lazy, Suspense } from "react";

// Lazy load all components
const Navbar = lazy(() => import("../../components/shared/Navbar"));
const Banner = lazy(() => import("../../components/Home/Banner"));
const Contact = lazy(() => import("../../components/Home/Contact"));
const Experience = lazy(() => import("../../components/Home/Experience"));
const SkillSection = lazy(() => import("../../components/Home/SkillSection"));
const WorkProccess = lazy(() => import("../../components/Home/WorkProcess"));
const Footer = lazy(() => import("../../components/shared/Footer"));

// Optional fallback UI
const Loader = () => <div className=" py-10 flex justify-center items-center">
    <div className="loader"></div>
</div>;

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Suspense fallback={<Loader />}>
        <div className="min-h-screen pt-12 md:pt-0 mx-auto bg-[url('/bannar.png')] bg-center bg-cover">
          <div className="container">
            <Navbar />
            <Banner />
          </div>
        </div>

        <div>
          <SkillSection />
          <Experience />
          <WorkProccess />
          <Contact />
        </div>

        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
