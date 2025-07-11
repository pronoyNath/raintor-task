import { useEffect, useState } from "react";
import logo from "@/assets/images/logo.png";
import Button from "../../components/reusable/Button/Button";
import arrowIcon from "@/assets/icons/arrow.png";
import { RiMenu3Line } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu]);

  const navItems = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "/" },
    { id: 3, label: "Portfolio", href: "/" },
    { id: 4, label: "Blog", href: "/" },
  ];


  useGSAP(()=>{
    gsap.from(".navLinks",{
      duration: 0.9, 
      opacity: 0, 
      y: -20, 
      stagger: 0.1,
      ease: "back.in"
    })
    gsap.from(".btn",{
      duration: 0.9, 
      opacity: 0, 
      x: 30, 
      stagger: 0.1,
      ease: "back.in"
    })
  })

  return (
    <header className="bg-transparent pb-8 pt-0 md:pt-8 px-7 flex justify-between items-center">
      {/* logo */}
      <img src={logo} className="navLinks max-w-28 lg:max-w-48" alt="logo" />

      <div
        className={`fixed z-50 top-0  ${
          openMenu ? "right-0" : "-right-[500px]"
        } md:static flex flex-col md:flex-row items-center gap-10 bg-light md:bg-transparent px-10 pt-16 md:p-0 h-screen md:h-fit duration-300`}
      >
        <nav className=" flex flex-col md:flex-row items-center gap-6 relative">
          {navItems?.map((item) => (
            <Link className="navLinks" href={item?.href || "/"} key={item?.id}>
              {item?.label}
            </Link>
          ))}
          {/* cross btn */}
          <button
            onClick={() => setOpenMenu(false)}
            className="absolute -top-10 -right-20 text-2xl md:hidden"
          >
            <FaXmark />
          </button>
        </nav>
        <div className="btn">
        <Button img={arrowIcon} text={"Start Project"} />
        </div>
      </div>

      {/* menu btn */}
      <button onClick={() => setOpenMenu(true)} className="text-2xl md:hidden">
        <RiMenu3Line />
      </button>

      {/* backdrop */}
      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="fixed inset-0 w-full z-40 md:hidden"
        ></div>
      )}
    </header>
  );
};

export default Navbar;
