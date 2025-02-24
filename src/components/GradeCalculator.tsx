'use client'
import { useState } from "react";

interface GradeResult {
    grade: string,
    percentage: string
}

export default function GradeCalculator() {
    const [marks, setMarks] = useState('');
    const [result, setResult] = useState<GradeResult | null>(null);

    const calculatorGrade = (ObtainMarks: number): GradeResult => {
        const totalMarks = 1100;
        const percentage = (ObtainMarks / totalMarks) * 100;
        const rounded = percentage.toFixed(1);

        if (ObtainMarks >= 1000) return { grade: "A+", percentage: rounded};
        if (ObtainMarks >= 850) return { grade: "A", percentage: rounded};
        if (ObtainMarks >= 750) return { grade: "B+", percentage: rounded};
        if (ObtainMarks >= 600) return { grade: "B", percentage: rounded};
        if (ObtainMarks >= 450) return { grade: "C", percentage: rounded};
        return {grade: "Failed", percentage: rounded}
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const ObtainMarks = parseInt(marks, 10);
        if (!isNaN(ObtainMarks) && ObtainMarks >= 0 && ObtainMarks <= 1100) {
            setResult(calculatorGrade(ObtainMarks);)
        }else{
            alert("Please enter a valid number between 0 to 1100")
        }
    };

    return(

        <></>
    );

}

