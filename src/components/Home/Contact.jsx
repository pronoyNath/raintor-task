import Button from "../../components/reusable/Button/Button";
import SectionTitle from "../../components/reusable/SectionTitle/SectionTitle";
import callIcon from "../../assets/icons/call.png";
import sendIcon from "../../assets/icons/send.png";
import mailIcon from "../../assets/icons/mail.png";
import fbIcon from "../../assets/icons/fb-light.png";
import InstaIcon from "../../assets/icons/insta-light.png";
import twitterIcon from "../../assets/icons/twitter-light.png";
import { Link } from "react-router-dom";
import { HiMiniPaperAirplane } from "react-icons/hi2";

const Contact = () => {
  const socials = [
    { id: 1, label: "Facebook", icon: fbIcon },
    { id: 2, label: "Instagram", icon: InstaIcon },
    { id: 3, label: "Twitter", icon: twitterIcon },
  ];

  return (
    <section className="pt-16 pb-32 px-5 relative overflow-hidden">
      {/* overlays */}
      <div className="absolute -z-10 -bottom-20 -right-0 w-[1000px] h-[300px] bg-primary opacity-90 rounded-full -rotate-12 blur-[140px]"></div>

      <div className="absolute -z-20 -bottom-44 -right-10 w-[1400px] h-[500px] bg-secondary opacity-90 rounded-full -rotate-12 blur-[140px]"></div>

      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* left content */}
          <div className="flex-1">
            <SectionTitle title={"Contact"} isDark={false} />
            <h2 className="max-w-[800px] text-2xl lg:text-6xl leading-[40px] lg:leading-[100px] font-bold text-center lg:text-left">
              Interested in{" "} <br />
              <span className="highlight-text !inline-block">work</span>{" "}
              together?
            </h2>
            <p className="pt-3 lg:pt-8 pb-6 lg:pb-10 text-center lg:text-left">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button text={"Schedule a Call"} img={callIcon} />
            </div>
          </div>

          {/* form */}
          <form className="w-full md:w-[500px] bg-dark p-8 rounded-3xl text-light space-y-5">
            <input
              type="text"
              className="w-full bg-transparent py-2 outline-none border-b border-b-light/20 focus:border-b-primary duration-200"
              placeholder="Enter your name"
              required
            />
            <input
              type="email"
              className="w-full bg-transparent py-2 outline-none border-b border-b-light/20 focus:border-b-primary duration-200"
              placeholder="Your email address"
              required
            />
            <input
              type="text"
              className="w-full bg-transparent py-2 outline-none border-b border-b-light/20 focus:border-b-primary duration-200"
              placeholder="Describe your project"
              required
            />
            <div className="flex items-center gap-3 py-2">
              <Button text={"Send"} icon={<HiMiniPaperAirplane />} isDark={true} iconCls={"-rotate-[40deg] -pl-1"}/>
              <span className="hidden md:block">or</span>
              <Button text={"Contact me"} img={mailIcon} isDark={true} />
            </div>
            <div className="flex items-center gap-3">
              <p className="opacity-80">@williamrey</p>
              <div className="flex items-center gap-3">
                <span className="w-10 h-[1px] bg-light/50 inline-block"></span>
                {socials?.map((social) => (
                  <Link href={"/"} key={social?.id}>
                    <img
                      src={social?.icon}
                      className="w-4 object-contain"
                      alt={social?.label}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
