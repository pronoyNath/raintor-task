import SectionTitle from "../../components/reusable/SectionTitle/SectionTitle";
import aboutImg from "../../assets/images/about-img.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const experienceRef = useRef(null);

      useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Stagger animation for text elements
    gsap.from(".animationGSAP", {
      y: 100, // Start from 100px below
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: experienceRef.current,
        start: "top 80%", 
        end: "bottom 30%",
        // markers: true,
        scrub: 1,
        toggleActions: "play none reverse none",
      }
    });

    // Add a slight scale animation
    gsap.from(".animationGSAP", {
      scale: 0.95,
      duration: 1.2,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: experienceRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

  }, { scope: experienceRef });
  return (
    <section ref={experienceRef} className="pt-16 lg:pt-28 relative overflow-hidden lg:overflow-visible">
      {/* overlays */}
      <div className="absolute -z-10 -top-40 left-0 w-[1000px] h-[400px] bg-primary opacity-90 rounded-full -rotate-12 blur-[140px]"></div>

      <div className="absolute -z-20 -top-28 right-0 w-[1200px] h-[500px] bg-secondary opacity-90 rounded-full blur-[140px]"></div>

      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="animationGSAP flex justify-end">
            <SectionTitle title={"About"} isDark={false} />
          </div>
          <h1 className="animationGSAP text-center text-2xl lg:text-7xl font-bold leading-[50px] lg:leading-[135px]">
            I've been <span className="highlight-text">Developing</span>{" "}
            Websites since{" "}
            <span className="highlight-text !rounded-md">2013</span>
          </h1>
          <p className="animationGSAP max-w-[900px] mx-auto text-center text-sm lg:text-lg pt-4 pb-16">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other and recommend the best course
            of action.
          </p>
        </div>
        <img
          src={aboutImg}
          className="w-full h-full object-cover pl-10"
          alt="about image"
        />
      </div>
    </section>
  );
};

export default Experience;
