"use client";
import { useState } from "react";
import Grade from "./Components/Grade";
import ObtainedMarks from "./Components/ObtainedMarks";
import courseData from "./Data/data";

export default function Home() {
  const [marks, setMarks] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("Semester 1");
  const handleOption = (e) => {
    setSelectedSemester(e.target.value);
  };
  const totalMarks = Object.values(marks).reduce(
    (sum, mark) => sum + (mark || 0),
    0
  );
  const maxMarks = courseData[selectedSemester]?.length * 100;
  const percentageMarks = parseFloat((totalMarks / maxMarks) * 100).toFixed(2);
  const totalCreditHour = courseData[selectedSemester]?.reduce(
    (sum, course) => {
      const creditHours = Number(course.creditHour.split("(")[0].trim());
      return sum + creditHours;
    },
    0
  );
  const getGPA = (marks) => {
    if (marks >= 90 && marks <= 100) return 4.0;
    if (marks >= 85 && marks < 90) return 3.67;
    if (marks >= 70 && marks < 85) return 3.33;
    if (marks >= 65 && marks < 70) return 3.0;
    if (marks >= 60 && marks < 65) return 2.67;
    if (marks >= 55 && marks < 60) return 2.33;
    if (marks >= 50 && marks < 55) return 2.0;
    if (marks >= 45 && marks < 50) return 1.67;
    if (marks >= 40 && marks < 45) return 1.0;
    if (marks <= 40 && marks > 0) return 0.0;
    if (marks == 0) return 0.0;
  };
  const calculateGpa = () => {
    let totalWeightedGPA = 0;
    let totalCredits = 0;
    courseData[selectedSemester]?.forEach((course, index) => {
      const obtainedMarks = marks[index] || 0;
      const creditHours = Number(course.creditHour.split("(")[0].trim());
      totalWeightedGPA += getGPA(obtainedMarks) * creditHours;
      totalCredits += creditHours;
    });
    return totalCredits > 0
      ? (totalWeightedGPA / totalCredits).toFixed(2)
      : "0.00";
  };
  return (
    <div className="flex flex-col p-8 justify-center items-center gap-8">
      <nav className="text-4xl text-center bg-black text-white w-[80vw] rounded-xl">
        Student Grade Calculator
      </nav>
      <div className="w-[80vw] ">
        <select
          onChange={handleOption}
          className="cursor-pointer border border-black p-2 rounded-xl"
        >
          {Object.keys(courseData).map((semester, index) => (
            <option key={index} value={semester}>
              Semester {index + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="w-[80vw] flex flex-col gap-4">
        <div className="w-full flex items-center bg-black text-white p-3 rounded-xl">
          {[
            "Course Code",
            "Course Name",
            "Credit Hour",
            "Obtained Marks",
            "Grade",
          ].map((title, index) => (
            <h2 key={index} className="text-[20px] text-center w-full">
              {title}
            </h2>
          ))}
        </div>
        {courseData[selectedSemester]?.map((course, index) => (
          <div
            key={index}
            className="w-full flex items-center  border border-black p-4 rounded-xl"
          >
            <h2 className="text-center w-full">{course.courseCode}</h2>
            <h2 className="text-center w-full">{course.courseName}</h2>
            <h2 className="text-center w-full">{course.creditHour}</h2>
            <ObtainedMarks
              setMarks={(mark) =>
                setMarks((prev) => ({ ...prev, [index]: mark }))
              }
            />
            <Grade marks={marks[index]} />
          </div>
        ))}
      </div>
      <div className="flex justify-between w-[80vw]">
        <div className=" gap-2">
          <h2>
            Total Marks: {totalMarks} / {maxMarks}
          </h2>
          <h2>Percentage: {percentageMarks}</h2>
          <h2>GPA: {calculateGpa()}</h2>
        </div>
        <div>Credit Hours: {totalCreditHour}</div>
      </div>
    </div>
  );
}
