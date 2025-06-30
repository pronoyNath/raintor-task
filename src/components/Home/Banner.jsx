import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Button from "../reusable/Button/Button";
import { IoCall } from "react-icons/io5";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Banner = () => {
  const bannerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); // handle resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Split text into spans only for desktop
  const splitText = (text) => {
    if (!isDesktop) return text;
    return text.split("").map((char, i) => (
      <span key={i} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  // Animate only on desktop
  useGSAP(
    () => {
      if (isDesktop) {
        gsap.from(".staggerText span", {
          duration: 0.5,
          opacity: 0,
          y: 20,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    },
    { scope: bannerRef, dependencies: [isDesktop] }
  );

  return (
    <div ref={bannerRef} className="container pt-12 pb-44">
      <div>
        <div className="flex pb-4 md:pb-0 items-center font-bold text-3xl md:text-5xl lg:text-6xl w-[80%] lg:h-[55vh] leading-[60px] md:leading-[100px] lg:leading-[120px]  md:mx-[30px] justify-between">
          <h1>
            Trusted{" "}
            <span className="staggerText bg-[#000000] text-white rounded-lg px-2">
              {splitText("Partner")}
            </span>{" "}
            for <br /> Your Website{" "}
            <span className="staggerText bg-[#000000] text-white rounded-lg px-2">
              {splitText("Develop.")}
            </span>
          </h1>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-12 mt-8">
          <div className="col-span-1 pr-1 lg:col-span-3">
            <div className="lg:flex items-center">
              <p className="lg:mr-[-20px] lg:ml-[15px] rotate-[-90deg]">
                @williamrey
              </p>
              <ul className="flex-col-reverse pb-8 justify-around text-2xl">
                <li className="rotate-[-90deg] py-[8px]">
                  <FaTwitter />
                </li>
                <li className="rotate-[-90deg] py-[8px]">
                  <FaInstagram />
                </li>
                <li className="rotate-[-90deg] py-[8px]">
                  <FaFacebook />
                </li>
                <li className="rotate-[-90deg] py-[8px]">
                  <TfiLayoutLineSolid />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-11 lg:col-span-9">
            <p className="w-full md:w-9/12 lg:w-7/11 leading-7">
              Building the world’s best marketing websites for over a decade.
              Your trusted partner for strategy, design, and dev.
            </p>
            <div className="pt-12">
              <Button icon={<IoCall />} text="Schedule a Call"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
