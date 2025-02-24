"use client";
import { useState } from "react";

export default function ObtainedMarks({ setMarks }) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    let value = e.target.value;
    if (value >= 0 && value <= 100) {
      setInputValue(value);
      setMarks(Number(value));
    } else {
      alert("Marks must be Between 0 and 100");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-full ">
        <input
          type="number"
          className="flex items-center justify-center  w-full outline-none text-center "
          placeholder="Enter Your Marks"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "e" || e.key === "E" || e.key === "-") {
              e.preventDefault();
            }
          }}
        />
      </div>
    </>
  );
}
