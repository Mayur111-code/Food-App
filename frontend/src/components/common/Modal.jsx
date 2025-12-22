import { X } from "lucide-react";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  width = "max-w-md",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div
        className={`relative bg-white rounded-lg shadow-lg w-full ${width} p-6 z-50`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
