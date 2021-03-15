import React, { useRef, useState } from 'react';

interface ITooltopProps {
    children: string;
    text: string;
}

interface ITooltopState {
    opacity: boolean;
}

const Tooltip: React.FC<ITooltopProps> = ({ children, text = 'What is it?' }) => {
    const [opacity, setOpacity] = useState<ITooltopState>({ opacity: false });
    const tooltipTargetRef = useRef(null);
    const tooltipTextRef = useRef(null);

    const toggle = (): void => {
        setOpacity({ opacity: !opacity });
    };
    return (
        <span className="tooltip">
            <span
                className="tooltip-wrapper"
                style={{ backgroundColor: 'red' }}
                onMouseEnter={() => alert()}
                ref={tooltipTargetRef}
            >
                {children}
            </span>
            <div className="tooltip-text">{text}</div>
        </span>
    );
};

export default Tooltip;
