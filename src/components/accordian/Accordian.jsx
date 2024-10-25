import React, { useState } from "react";
import { faqs } from "./content";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

function Accordian() {
  const [expand, setExpand] = useState("");

  return (
    <div className="min-h-screen flex justify-center">
      {" "}
      <div className="w-[50%] p-4 ">
        {faqs.map((faq) => {
          return (
            <div
              className={`border rounded-md ${
                expand === faq.id ? "border-b-2" : "border-b"
              }`}
            >
              <div
                className={`text-start  p-4 flex justify-between ${
                  expand === faq.id ? "border-b-0" : ""
                }`}
              >
                <div className="">{faq.header}</div>
                <div
                  onClick={() => setExpand(faq.id === expand ? "" : faq.id)}
                  className="cursor-pointer flex items-center"
                >
                  {faq.id === expand ? <SlArrowUp /> : <SlArrowDown />}
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in bg-gray-100 ${
                  expand === faq.id
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {" "}
                <div className="m-4 transition-opacity duration-700 text-left">
                  {faq.description}
                </div>{" "}
              </div>
            </div>
          );
        })}
        <div className="flex justify-end ">Developed By Anamol Soman</div>
      </div>
    </div>
  );
}

export default Accordian;
