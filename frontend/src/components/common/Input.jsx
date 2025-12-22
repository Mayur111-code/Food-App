const Input = ({
  label,
  type = "text",
  className = "",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-600">
          {label}
        </label>
      )}

      <input
        type={type}
        className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
