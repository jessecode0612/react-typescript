import React, { FunctionComponent } from 'react';
export interface ArrowProps {
    onClick?: (...args: any) => any;
    direction: string;
}

export const Arrow: FunctionComponent<ArrowProps> = (props: ArrowProps) => (
    <button
        onClick={props.onClick}
        data-direction={props.direction}
    />
);
