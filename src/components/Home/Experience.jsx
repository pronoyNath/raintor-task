import SectionTitle from "../../components/reusable/SectionTitle/SectionTitle";
import aboutImg from "../../assets/images/about-img.png";

const Experience = () => {
    return (
        <section className="pt-16 lg:pt-28 relative overflow-hidden lg:overflow-visible">

            {/* overlays */}
            <div className="absolute -z-10 -top-40 left-0 w-[1000px] h-[400px] bg-primary opacity-90 rounded-full -rotate-12 blur-[140px]"></div>

            <div className="absolute -z-20 -top-28 right-0 w-[1200px] h-[500px] bg-secondary opacity-90 rounded-full blur-[140px]"></div>

            <div className="container">
                <div className="flex justify-end">
                    <SectionTitle title={"About"} isDark={false} />
                </div>
                <h1 className="max-w-5xl mx-auto text-center text-2xl lg:text-7xl font-bold leading-[50px] lg:leading-[135px]">I've been <span className="highlight-text">Developing</span> Websites since <span className="highlight-text !rounded-md">2013</span></h1>
                <p className="max-w-[900px] mx-auto text-center text-sm lg:text-lg pt-4 pb-16">We start every new client interaction with an in-depth discovery call where
                    we get to know each other and recommend the best course of
                    action.</p>
                <img src={aboutImg} className="w-full h-full object-cover pl-10" alt="about image" />
            </div>
        </section>
    );
};

export default Experience;