import SectionTitle from "../../components/reusable/SectionTitle/SectionTitle";
import { useRef } from "react";
import cardIcon from "../../assets/icons/card-icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import arrowIcon from "../../assets/icons/arrow-light.png";
import SkillCard from "./SkillCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const SkillSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const sectionRef = useRef(null);

  const cards = [
    {
      id: 1,
      header: "HTML & CSS",
      icon: cardIcon,
      details:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    },
    {
      id: 2,
      header: "Javascript",
      icon: cardIcon,
      details:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    },
    {
      id: 3,
      header: "Webflow",
      icon: cardIcon,
      details:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    },
    {
      id: 4,
      header: "HTML & CSS",
      icon: cardIcon,
      details:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    },
    {
      id: 5,
      header: "Javascript",
      icon: cardIcon,
      details:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    },
    {
      id: 6,
      header: "Webflow",
      icon: cardIcon,
      details:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    },
  ];

  

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
        trigger: sectionRef.current,
        start: "top 50%", 
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
        trigger: sectionRef.current,
        start: "top 50%",
        toggleActions: "play none none none"
      }
    });

  }, { scope: sectionRef });
  return (
    <section ref={sectionRef}  className="container -mt-32">
      <div className="bg-dark text-light pt-10 lg:pt-32 px-6 lg:px-16 rounded-3xl relative z-30">
        <div className="animationGSAP">
        <SectionTitle title={"Why Choose me"} isDark={true} />
        </div>

        {/* Title & Arrows */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 flex-wrap relative">
          <h2 className="animationGSAP text-xl md:text-5xl font-semibold max-w-md leading-[40px] md:leading-[70px]">
            My Extensive <br /> List of Skills
          </h2>

          <div className="flex items-center gap-6">
            <p className="animationGSAP h-fit max-w-md text-left lg:text-right leading-8 border-b border-b-light pb-5 border-opacity-40">
              Building the worlds best marketing Your trusted partner for
              strategy, design, and dev.
            </p>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="animationGSAP absolute -bottom-16 lg:-bottom-6 right-0 flex gap-2 pt-1">
            <button
              ref={prevRef}
              className="w-10 h-10 border border-light rounded-full flex items-center justify-center"
            >
              <img
                src={arrowIcon}
                className="object-contain p-2"
                alt="prev icon"
              />
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 border border-light rounded-full flex items-center justify-center"
            >
              <img
                src={arrowIcon}
                className="object-contain p-2 rotate-180"
                alt="prev icon"
              />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className=" mt-24 lg:mt-16 relative -mx-2 px-2 overflow-visible">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              768: {
                slidesPerView: 2.2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            modules={[Navigation]}
            className="!overflow-visible "
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id} >
                <SkillCard
                  icon={card?.icon}
                  header={card?.header}
                  details={card?.details}
                ></SkillCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
