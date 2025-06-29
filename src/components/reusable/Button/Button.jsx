const Button = ({ img, icon, text, isDark = false }) => {
  return (
    <button
      className={`py-2 pr-4 flex items-center gap-2 border ${
        isDark ? "border-light" : "border-dark"
      } rounded-full`}
    >
      {img && (
        <img
          src={img}
          className={`w-8 h-8 object-contain p-[6px] border ${
            isDark ? "border-light" : "border-dark"
          } rounded-full`}
          alt="text"
        />
      )}
      {icon && (
        <div
          className={`w-8 h-8 object-contain p-[6px] border ${
            isDark ? "border-light" : "border-dark"
          } rounded-full`}
        >
          {icon}
        </div>
      )}
      <span className="">{text}</span>
    </button>
  );
};

export default Button;
