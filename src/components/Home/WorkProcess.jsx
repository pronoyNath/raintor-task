import SectionTitle from "../../components/reusable/SectionTitle/SectionTitle";
import arrowLightIcon from "../../assets/icons/arrow-light.png";
import arrowIcon from "../../assets/icons/arrow.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WorkProccess = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const hoverHandlers = useRef([]);

  useGSAP(
    () => {
      // Animation for cards - left cards come from left, right cards from right
      cardsRef.current.forEach((card, index) => {
        const isLeftCard = index % 2 === 0; 
        const fromX = isLeftCard ? -100 : 100;

        gsap.from(card, {
          x: fromX,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
            markers: false,
          },
        });

        // Create hover handlers
        const handleMouseEnter = () => {
          gsap.to(card, {
            rotate: 3,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotate: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        // Store handlers for cleanup
        hoverHandlers.current.push({
          card,
          handleMouseEnter,
          handleMouseLeave,
        });

        // Add event listeners
        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
      });

      // Title animation
      gsap.from(".section-title, .process-heading", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      return () => {
        // Clean up event listeners
        hoverHandlers.current.forEach(
          ({ card, handleMouseEnter, handleMouseLeave }) => {
            card.removeEventListener("mouseenter", handleMouseEnter);
            card.removeEventListener("mouseleave", handleMouseLeave);
          }
        );
        hoverHandlers.current = [];
      };
    },
    { scope: sectionRef }
  );

  const cards = [
    {
      id: 1,
      title: "Discovery",
      text: "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
    },
    {
      id: 2,
      title: "Strategy",
      text: "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.",
    },
    {
      id: 3,
      title: "Design",
      text: "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page will be designed, reviewed, and given your stamp of approval.",
    },
    {
      id: 4,
      title: "Build",
      text: "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    },
  ];

  // Add cards to ref array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="container">
      <div className="bg-[#141414] text-light pt-16 lg:pt-32 pb-8 lg:pb-16 px-8 lg:px-14 rounded-3xl">
        <div className="relative">
          <div className="absolute left-0 top-0 section-title">
            <SectionTitle title={"Work Process"} isDark={true} />
          </div>
          <h2 className="pt-20 xl:pt-0 text-2xl lg:text-5xl font-semibold text-left xl:text-center process-heading">
            My Work Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-16">
          {cards?.map((card, index) => (
            <div
              key={card?.id}
              ref={addToRefs}
              className="bg-dark p-5 rounded-3xl hover:bg-primary duration-300 hover:text-dark group"
            >
              <div className="flex justify-between">
                <h3 className="px-5 py-2 bg-secondary text-dark group-hover:text-light group-hover:bg-dark w-fit rounded-full">
                  {card?.title}
                </h3>
                <button className="flex items-center gap-2">
                  <img
                    src={arrowLightIcon}
                    className="group-hover:hidden w-6 rotate-180"
                    alt="arrow"
                  />
                  <img
                    src={arrowIcon}
                    className="hidden group-hover:inline-block w-6"
                    alt="arrow"
                  />
                  <span className="underline">Read More</span>
                </button>
              </div>
              <p className="opacity-70 mt-6">{card?.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProccess;
