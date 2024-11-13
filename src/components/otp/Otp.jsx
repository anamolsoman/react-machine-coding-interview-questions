import React, { useRef, useState } from "react";

function Otp() {
  const [otpFields, setOtpFields] = useState(new Array(6).fill(""));
  const [numberValidation, setNumberValidation] = useState(false);
  const ref = useRef([]);
  console.log(ref);
  const handleKeyUp = (e, index) => {
    let copyOtpFields = [...otpFields];
    const key = e.key;
    if (isNaN(key)) {
      setNumberValidation(true);
      return;
    }
    setNumberValidation(false);
    if (index + 1 < otpFields.length) ref.current[index + 1].focus();
    copyOtpFields[index] = key;
    setOtpFields(copyOtpFields);
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-200">
      <div>
        {otpFields.map((field, index) => {
          return (
            <input
              type="text"
              ref={(currentIndex) => (ref.current[index] = currentIndex)}
              key={index}
              value={field}
              onKeyUp={(e) => handleKeyUp(e, index)}
              className="h-[60px] w-[60px] border m-1 p-5 rounded-md"
            />
          );
        })}
      </div>
      <div className="text-red-600 font-semibold">
        {numberValidation && "Enter Numbers Only"}
      </div>
    </div>
  );
}

export default Otp;
