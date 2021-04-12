export interface ITooltipProps {
    children: string;
    text: string;
}

export interface IOffsetsOfTooltip {
    offsetTop: number;
    offsetLeft: number;
    offsetWidth: number;
}

export interface ITooltipTextProps extends IOffsetsOfTooltip {
    text: string;
    isActive: boolean;
}
