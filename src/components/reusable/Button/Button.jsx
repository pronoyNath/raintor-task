import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Button = ({ img, icon, text, isDark = false, iconCls }) => {
  const buttonRef = useRef(null);
  const iconRef = useRef(null);

  useGSAP(() => {
    if (!buttonRef.current || !iconRef.current) return;

    const button = buttonRef.current;
    const icon = iconRef.current;

    
    let originalX = 0;
    let originalY = 0;

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      
    
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      
      const normalizedX = x / (rect.width / 2);
      const normalizedY = y / (rect.height / 2);
      
      
      gsap.to(icon, {
        x: normalizedX * 5, 
        y: normalizedY * 5,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      // Return icon to original position
      gsap.to(icon, {
        x: originalX,
        y: originalY,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)"
      });
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`group py-2 pr-4 flex items-center gap-2 border ${
        isDark ? "border-light" : "border-dark"
      } rounded-full relative overflow-hidden`}
    >
      {(img || icon) && (
        <div ref={iconRef} className="relative z-10">
          {img ? (
            <img
              src={img}
              className={`w-8 h-8 object-contain p-[6px] border ${
                isDark ? "border-light" : "border-dark"
              } rounded-full`}
              alt="text"
            />
          ) : (
            <div
              className={`${iconCls} w-8 h-8 object-contain p-[6px] border ${
                isDark ? "border-light" : "border-dark"
              } rounded-full flex items-center justify-center`}
            >
              {icon}
            </div>
          )}
        </div>
      )}
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default Button;