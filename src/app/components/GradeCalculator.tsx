'use client'
import useState from "react";

interface GradeResult {
    grade: string,
    percentage: string
}

export default function GradeCalculator() {
    const [marks, setMarks] = useState('');
    const [resul, setResult] = useState<GradeResult | null>(null);

    const calculatorGrade = (ObtainMarks: number): GradeResult => {
        const totalMarks = 1100;
        const percentage = (ObtainMarks / totalMarks) * 100;
        const rounded = percentage.toFixed(1);
    }

}

