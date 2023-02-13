import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface HorizontalLineProps {
    length: number;
    weight: number;
    color: string;
}

const DynamicLineStyle = ({length, weight, color}: HorizontalLineProps) => css`
    width: ${(length) + 'px'};
    height: ${(weight) + 'px'};
    background-color: ${(color)};
`

const Line = styled.div`
    ${DynamicLineStyle};
`


const HorizontalLine = ({length, weight, color}: HorizontalLineProps) => {
    return <Line length={length} weight={weight} color={color}/>
}


export default HorizontalLine;