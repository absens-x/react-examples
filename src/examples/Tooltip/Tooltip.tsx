import React, { useEffect, useRef, useState } from 'react';

import { ITooltipTextProps, IOffsetsOfTooltip, ITooltipProps } from './types';
import './Tooltip.scss';

import TooltipText from './TooltipText/TooltipText';

const Tooltip: React.FC<ITooltipProps> = ({ children, text = 'Подсказка' }) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [data, setData] = useState<ITooltipTextProps>({
        text,
        offsetTop: 0,
        offsetLeft: 0,
        offsetWidth: 0,
        isActive,
    });
    const tooltipTargetRef = useRef<HTMLSpanElement>(null);

    function toggle(): void {
        setIsActive(!isActive);
    }

    useEffect(() => {
        const { offsetTop, offsetLeft, offsetWidth }: IOffsetsOfTooltip = tooltipTargetRef.current as HTMLSpanElement;

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
