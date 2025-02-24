'use client'
import useState from "react";

interface GradeResult {
    grade: string,
    percentage: string
}

export default function GradeCalculator() {
    const [marks, setMarks] = useState('');
    const [resul, setResult] = useState<GradeResult | null>(null);
}

