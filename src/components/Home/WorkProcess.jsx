import SectionTitle from "../../components/reusable/SectionTitle/SectionTitle";
import arrowLightIcon from "../../assets/icons/arrow-light.png";
import arrowIcon from "../../assets/icons/arrow.png";


const WorkProccess = () => {

    const cards = [
            {
                id: 1,
                title: "Discovery",
                text: "We start every new client interactionwith an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course ofaction.",
            },
            {
                id: 2,
                title: "Strategy",
                text: "Every end-to-end project of oursbegins with a tEspoke pre-buildstrateu. From brand ID consultationto in-depth ccxle reviews we're hereto set the stage for success.",
            },
            {
                id: 3,
                title: "Design",
                text: "After we have a comprehensiveunderstanding of your brand, we'll beready to move onto design. Each pageor will be designed, reviewed,and given your stamp of approval.",
            },
            {
                id: 4,
                title: "Build",
                text: "Whether we've just finished designing your new site or you'rehanding off finished designs for us todevelop in Webflow, we're here toapply our trusted developmentprocess to your project.",
            },
        ];

    return (
        <section className="container">
            <div className="bg-[#141414] text-light pt-16 lg:pt-32 pb-8 lg:pb-16 px-8 lg:px-14 rounded-3xl">
                <div className="relative">
                    <div className="absolute left-0 top-0">
                        <SectionTitle title={"Work Proccess"} isDark={true} />
                    </div>
                    <h2 className="pt-20 xl:pt-0 text-2xl lg:text-5xl font-semibold text-left xl:text-center">
                        My Work Proccess
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-16">
                    {
                        cards?.map(card =>
                            <div key={card?.id} className="bg-dark p-5 rounded-3xl hover:bg-primary duration-300 hover:text-dark group hover:rotate-3">
                                <div className="flex justify-between">
                                    <h3 className="px-5 py-2 bg-secondary text-dark group-hover:text-light group-hover:bg-dark w-fit rounded-full">{card?.title}</h3>
                                    <button className="flex items-center gap-2">
                                        <img src={arrowLightIcon} className="group-hover:hidden w-6 rotate-180" alt="arrow" />
                                        <img src={arrowIcon} className="hidden group-hover:inline-block w-6" alt="arrow" />
                                       <span className="underline">Read More</span>
                                        </button>
                                </div>
                                <p className="opacity-70 mt-6">{card?.text}</p>
                            </div>
                        )
                    }
                </div>

            </div>
        </section>
    );
};

export default WorkProccess;
