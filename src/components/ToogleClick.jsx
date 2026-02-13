import { useState } from "react";

const ToogleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleClick = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="parent w-full h-screen flex justify-center">
      <div
        onClick={handleToggleClick}
        className="toggleswitch w-25 h-12.5 rounded-[25px] bg-[#ccc] relative cursor-pointer p-1.25 mt-20 shadow-[rgba(17,12,46,0.15)_0px_48px_100px_0px]"
      >
        <div className="switch w-10 h-10 rounded-full flex items-center justify-center text-white font-bold absolute top-1 left-1 border-2 border-gray-300 shadow-lg transition-all duration-300 ease-linear">
          <span>{isOn ? "On" : "Off"}</span>
        </div>
      </div>
    </div>
  );
};

export default ToogleSwitch;
