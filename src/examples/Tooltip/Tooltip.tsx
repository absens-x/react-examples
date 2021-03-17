import React, { CSSProperties, useEffect, useRef, useState } from 'react';

import './Tooltip.scss';

interface ITooltipProps {
    children: string;
    text: string;
}

interface ITooltipTextProps {
    text: string;
    isActive: boolean;
    offsetTop: number;
    offsetLeft: number;
    offsetWidth: number;
}

// -------------------------

const TooltipText: React.FC<ITooltipTextProps> = ({ isActive, text, offsetTop, offsetLeft, offsetWidth }) => {
    const tooltipTextRef = useRef<HTMLSpanElement>(null);
    let style: CSSProperties = { top: -100, left: -100, zIndex: -1000 };

    if (isActive) {
        const { offsetWidth: tooltipTextOffsetWidth } = tooltipTextRef.current as HTMLSpanElement;
        style = {
            top: offsetTop + 20,
            left: offsetLeft + offsetWidth / 2 - tooltipTextOffsetWidth / 2,
            zIndex: 10000,
        };
    }

    return (
        <span style={style} className="tooltip-text" ref={tooltipTextRef}>
            {text}
        </span>
    );
};

// -------------------------

const Tooltip: React.FC<ITooltipProps> = ({ children, text = 'What is it?' }) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [data, setData] = useState<ITooltipTextProps>({
        text,
        offsetTop: 0,
        offsetLeft: 0,
        offsetWidth: 0,
        isActive,
    });
    const tooltipTargetRef = useRef<HTMLSpanElement>(null);

    const toggle = (): void => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const { offsetTop, offsetLeft, offsetWidth } = tooltipTargetRef.current as HTMLSpanElement;

        setData(() => {
            if (isActive) {
                return {
                    ...data,
                    isActive,
                    offsetLeft,
                    offsetTop,
                    offsetWidth,
                };
            }
            return {
                ...data,
                isActive,
            };
        });
    }, [isActive]);

    return (
        <span className="tooltip">
            <span className="tooltip-target" onMouseEnter={toggle} onMouseLeave={toggle} ref={tooltipTargetRef}>
                {children}
            </span>
            {isActive ? <TooltipText {...data} /> : null}
        </span>
    );
};

export default Tooltip;
