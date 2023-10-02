const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg rounded-full ${
        fullWidth && "w-full"
      } leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red  text-white border-coral-red hover:bg-white hover:text-coral-red transition-all duration-300"
      } `}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="Button icon" className="ml-2 rounded-full" />
      )}
    </button>
  );
};

export default Button;
