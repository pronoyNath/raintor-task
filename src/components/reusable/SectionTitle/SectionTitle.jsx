import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import arrowIcon from "@/assets/icons/section-arrow.png";
import arrowDarkIcon from "@/assets/icons/section-arrow-dark.png";

const SectionTitle = ({ title, isDark }) => {
  const arrowRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const handleMouseEnter = () => {
      gsap.to(arrowRef.current, {
        y: 8,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(arrowRef.current, {
            y: 0,
            duration: 0.5,
            ease: "bounce.out"
          });
        }
      });
    };

    
    containerRef.current?.addEventListener("mouseenter", handleMouseEnter);

   
    return () => {
      containerRef.current?.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex items-center gap-0 pb-6 cursor-pointer">
      <div ref={arrowRef}>
        <img 
          src={isDark ? arrowIcon : arrowDarkIcon} 
          alt="arrow" 
          className="transition-all duration-300"
        />
      </div>
      <h2
        className={`${
          isDark ? "text-light border-light" : "text-dark border-dark"
        } px-5 py-2 border-[2.5px] rounded-full`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;