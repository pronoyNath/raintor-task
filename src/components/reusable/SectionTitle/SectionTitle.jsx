import arrowIcon from "@/assets/icons/section-arrow.png";
import arrowDarkIcon from "@/assets/icons/section-arrow-dark.png";

const SectionTitle = ({title, isDark}) => {
    return (
        <div className="flex items-center gap-1 pb-6">
            <img src={isDark ? arrowIcon : arrowDarkIcon} alt="arrow" />
            <h2 className={`${isDark ? "text-light border-light" : "text-dark border-dark"} px-5 py-2 border-[2.5px] rounded-full`}>{title}</h2>
        </div>
    );
};

export default SectionTitle;