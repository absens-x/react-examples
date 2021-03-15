import React, { useEffect, useRef, useState } from 'react';

import './Tooltip.scss';

interface ITooltopProps {
    children: string;
    text: string;
}

const Tooltip: React.FC<ITooltopProps> = ({ children, text = 'What is it?' }) => {
    const [tooltipShow, setTooltipShow] = useState<boolean>(false);

    const tooltipTargetRef = useRef(null);
    const tooltipTextRef = useRef(null);

    const toggle = (): void => {
        setTooltipShow(!tooltipShow);
    };

    useEffect(() => {
        const { offsetTop, offsetLeft }: { offsetTop: string; offsetLeft: string } = tooltipTargetRef.current;
        console.log(offsetTop);
    }, [tooltipShow]);

    return (
        <span className="tooltip">
            <span className="tooltip-target" onMouseEnter={toggle} onMouseOut={toggle} ref={tooltipTargetRef}>
                {children}
            </span>
            <span ref={tooltipTextRef} className="tooltip-text">
                {text}
            </span>
        </span>
    );
};

export default Tooltip;
