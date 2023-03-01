import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface ButtonProps {
    color?: string;
    textColor?: string;
    width?: string;
    height?: string;
    IconComponent?: any,
    text?: string
    onClick?: any
}



const dynamicButtonStyle = (props:ButtonProps) => css`
    width: ${(props.width || '190px' )};
    height: ${(props.height || '50px')};

    background: ${(props.color || 'black')};
    color: ${props.textColor || 'white'};

    :hover {
        width: ${(props.width || '190px' )};
        height: ${(props.height || '50px')};
    }
`

const ButtonWrapper = styled.button<ButtonProps>`
    ${dynamicButtonStyle}
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 0;
    outline: none;
    cursor: pointer;
    border-radius: 4px;

`

const TextComponent = styled.div`
    
`

export const SquareButton = ({
    color='black',
    textColor='white',
    width='190px',
    height='50px',
    text='Button',
    IconComponent,
    onClick=(event: React.MouseEvent<HTMLButtonElement>) => { }
}:ButtonProps) => {
    return (
        <ButtonWrapper
            onClick={onClick}
            color={color}
            textColor={textColor}
            width={width}
            height={height}
        >
            
            {IconComponent ? <IconComponent /> : ''}
            <TextComponent>{text}</TextComponent>
            
        </ButtonWrapper>
    )
}


export default SquareButton;