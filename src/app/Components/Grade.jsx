export default function Grade({ marks }) {
  const calculateGrade = (marks) => {
    if (marks >= 90 && marks <= 100) return "A";
    if (marks >= 85 && marks < 90) return "A-";
    if (marks >= 70 && marks < 85) return "B+";
    if (marks >= 65 && marks < 70) return "B";
    if (marks >= 60 && marks < 65) return "B-";
    if (marks >= 55 && marks < 60) return "C+";
    if (marks >= 50 && marks < 55) return "C";
    if (marks >= 45 && marks < 50) return "C-";
    if (marks >= 40 && marks < 45) return "D";
    if (marks <= 40 && marks > 0) return "F";
    if (marks == 0) return "I";
    return "-";
  };
  return (
    <>
      <div className="flex items-center justify-center w-full ">
        {calculateGrade(marks)}
      </div>
    </>
  );
}
