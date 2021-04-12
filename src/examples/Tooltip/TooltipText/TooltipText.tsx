import React, { CSSProperties, useRef } from 'react';
import { ITooltipTextProps } from '../types';

const TooltipText: React.FC<ITooltipTextProps> = ({ isActive, text, offsetTop, offsetLeft, offsetWidth }) => {
    const tooltipTextRef = useRef<HTMLSpanElement>(null);
    let style: CSSProperties = { top: -100, left: -100, zIndex: -1000 };

    if (isActive) {
        const {
            offsetWidth: tooltipTextOffsetWidth,
        }: { offsetWidth: number } = tooltipTextRef.current as HTMLSpanElement;

        let left: number = offsetLeft + offsetWidth / 2 - tooltipTextOffsetWidth / 2;
        left = left < 0 ? offsetLeft : left;
        style = {
            top: offsetTop + 20,
            left,
            zIndex: 10000,
        };
    }

    return (
        <span style={style} className="tooltip-text" ref={tooltipTextRef}>
            {text}
        </span>
    );
};

export default TooltipText;
