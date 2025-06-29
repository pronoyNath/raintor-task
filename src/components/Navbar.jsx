import { useEffect, useState } from "react";
import logo from "@/assets/images/logo.png";
import Button from "../components/reusable/Button/Button";
import arrowIcon from "@/assets/icons/arrow.png";
import { RiMenu3Line } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

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

  return (
    <header className="bg-transparent pb-8 pt-0 md:pt-8 px-7 flex justify-between items-center">
      {/* logo */}
      <img src={logo} className="max-w-28 lg:max-w-48" alt="logo" />

      <div
        className={`fixed z-50 top-0 ${
          openMenu ? "right-20" : "-right-[500px]"
        } md:static flex flex-col md:flex-row items-center gap-10 bg-light md:bg-transparent px-10 pt-16 md:p-0 h-screen md:h-fit duration-300`}
      >
        <nav className="flex flex-col md:flex-row items-center gap-6 relative">
          {navItems?.map((item) => (
            <Link href={item?.href || "/"} key={item?.id}>
              {item?.label}
            </Link>
          ))}
          {/* cross btn */}
          <button
            onClick={() => setOpenMenu(false)}
            className="absolute -top-10 -right-32 text-2xl md:hidden"
          >
            <FaXmark />
          </button>
        </nav>
        <Button img={arrowIcon} text={"Start Project"} />
      </div>

      {/* menu btn */}
      <button onClick={() => setOpenMenu(true)} className="text-2xl md:hidden">
        <RiMenu3Line />
      </button>

      {/* backdrop */}
      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="fixed inset-0 bg-[#C5FFEE] z-40 md:hidden"
        ></div>
      )}
    </header>
  );
};

export default Navbar;
