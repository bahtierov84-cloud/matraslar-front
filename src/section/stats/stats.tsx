import React, { useEffect, useState } from "react";
import "./stats.css";
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
    const hasPlus = target.includes("+");
    const hasK = target.toLowerCase().includes("k");

    const numericTarget = parseInt(target.replace(/[^\d]/g, ""), 10);

    useEffect(() => {
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
    }, [numericTarget, duration]);

    return (
        <>
            {count}
            {hasK && "k"}
            {hasPlus && "+"}
        </>
    );
};

const Stats: React.FC = () => {
    return (
        <section className='stats'>
            <div className='stats__container container'>
                {statsData.map((item) => (
                    <div key={item.id} className='stats__item'>
                        <div className='stats__value'>
                            <AnimatedCounter target={item.value} />
                        </div>
                        <p className='stats__label'>{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
