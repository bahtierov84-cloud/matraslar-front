import React, { useEffect, useState, useRef } from "react";
import "./stats.css";
// 1. Импортируем данные (убедитесь, что экспорт в data.ts называется statsData или подобным)
import { statsData } from "../../assets/data";

interface AnimatedCounterProps {
    target: string;
    duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    target,
    duration = 2000,
}) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    const numericTarget =
        parseInt((target || "").replace(/[^\d]/g, ""), 10) || 0;
    const hasPlus = (target || "").includes("+");
    const hasK = (target || "").toLowerCase().includes("k");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 },
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTarget = 0;
        const totalSteps = 60;
        const stepTime = Math.floor(duration / totalSteps);

        const timer = setInterval(() => {
            startTarget += numericTarget / totalSteps;
            if (startTarget >= numericTarget) {
                setCount(numericTarget);
                clearInterval(timer);
            } else {
                setCount(Math.floor(startTarget));
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [isVisible, numericTarget, duration]);

    return (
        <span ref={ref}>
            {count}
            {hasK && "k"}
            {hasPlus && "+"}
        </span>
    );
};

const Stats: React.FC = () => {
    // Просто используем импортированные данные напрямую
    const stats = statsData; 

    return (
        <section className='stats'>
            <div className='stats__container container'>
                {stats.map((item) => (
                    <div key={item.id} className='stats__item'>
                        <div className='stats__value'>
                            <AnimatedCounter target={item.value || "0"} />
                        </div>
                        <p className='stats__label'>{item.label || "Нет данных"}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Stats;
