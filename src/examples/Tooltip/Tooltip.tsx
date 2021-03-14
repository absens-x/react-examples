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
        <div className="tooltip">
            <div
                className="tooltip-wrapper"
                style={{ backgroundColor: 'red' }}
                onMouseEnter={() => alert()}
                ref={tooltipTargetRef}
            >
                {children}
            </div>
            {/* <div className="tooltip-text">{text}</div> */}
        </div>
    );
};

export default Tooltip;
