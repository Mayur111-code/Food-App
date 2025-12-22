const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "px-4 py-2 rounded font-medium transition duration-200 disabled:opacity-50";

  const variants = {
    primary: "bg-orange-600 text-white hover:bg-orange-700",
    outline: "border border-orange-600 text-orange-600 hover:bg-orange-50",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
