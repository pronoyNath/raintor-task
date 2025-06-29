import footerOrg from "../../assets/images/footer-org.png";

const Footer = () => {
  const contacts = {
    emails: ["HELLO@DEVLOP.ME.COM", "MAHBUBUL@ME.COM"],
    phones: ["+784649 4981 00", "+8845 0100 211"],
  };

  const menuLinks = ["HOME", "ABOUT", "PORTFOLIO", "BLOG"];
  const socialLinks = [
    "TWITTER",
    "INSTAGRAM",
    "FACEBOOK",
    "BEHANCE",
    "DRIBBBLE",
  ];

  return (
    <footer className="container">
      <div className="bg-dark text-light rounded-3xl px-6 md:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-7">
          <div className="col-span-3">
            <h2 className="text-primary font-bold text-lg">DEVLOP.ME</h2>
          </div>

          <div className="col-span-4">
            <h2 className="text-4xl md:text-5xl font-semibold">
              As you <span className="inline-block">can</span>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm pt-24">
                {/* Say hello & Call */}
                <div className="space-y-2 md:col-span-2">
                  <h4 className="font-medium text-light/60 pb-3">Say hello</h4>
                  {contacts.emails.map((email, index) => (
                    <p key={index} className="uppercase space-y-2 font-normal">
                      {email}
                    </p>
                  ))}

                  <h4 className="pt-4 font-medium text-light/60 pb-3">Call</h4>
                  {contacts.phones.map((phone, index) => (
                    <p key={index} className="space-y-2 font-normal">
                      {phone}
                    </p>
                  ))}
                </div>

                {/* Menu */}
                <div className="space-y-2">
                  <h4 className="font-medium text-light/60 pb-3">Menu</h4>
                  <ul className="space-y-2 font-normal">
                    {menuLinks.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Social */}
                <div className="space-y-2">
                  <h4 className="text-light/60 pb-3">Social</h4>
                  <ul className="space-y-2 font-normal">
                    {socialLinks.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </h2>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-3 items-center text-xs text-white/40 pt-32 flex-wrap gap-4">
          <img
            src={footerOrg}
            className="max-w-40 object-contain"
            alt="footer org"
          />
          <span className="text-center">© devlop.me 2022</span>
          <span className="text-right">PRIVACY - TERMS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
