import { useState } from "react";

export default function FeatureCardIcon({ label, value, icon, description, color }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const bgColor = `bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-${color}-600 to-${color}-400 text-white shadow-${color}-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center`;

  return (
    <div className="mb-4 w-full md:w-1/4 sm:w-1/2 p-3">
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
        <div className={bgColor}>
          <span className="material-icons text-3xl">{icon}</span>
        </div>
        <div className="p-4 text-right">
          <p className="block antialiased font-sans text-sm leading-normal font-normal text-gray-600">
            {label}
          </p>
          <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-gray-900">
            {value}
          </h4>
        </div>
        <div className="border-t border-gray-50 p-4">
          <button
            className="text-blue-600 hover:underline"
            onClick={handleClick}
          >
            {isOpen ? "Hide details" : "See details"}
          </button>
          {isOpen && (
            <div className="mt-2 rounded-lg bg-gray-100 p-4">
              {
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-gray-600">
                  {label === "Professors" ? "Professors" : "Lectures"}
                </p>
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
}