import { css } from "@emotion/react";
import styled from "@emotion/styled";


interface DistanceFilterItemProps {
    isSelected: boolean;
    distance: number;
    text: string;
    onClick: any;
}

interface DynamicDistanceFilterItemLiStyleProps {
    isSelected:boolean;
}

const DynamicDistanceFilterItemLiStyle = ({isSelected}:DynamicDistanceFilterItemLiStyleProps) => css`
    background-color:${(isSelected ? '#707070;' : '#FFFFFF;')};

    p {
        color:${(isSelected ? '#FFFFFF;' : 'black;')}; 
    }
`


const DistanceFilterItemLi = styled.li`
    ${DynamicDistanceFilterItemLiStyle};
    display: flex;
    list-style: none;
    border-radius: 20px;
    width: 100px;
    height: 40px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const DistanceFilterItemText = styled.p`
    margin: 0px;
    padding: 0px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;

    
`

const DistanceFilterItem = ({isSelected, text, distance, onClick}: DistanceFilterItemProps) => {

    return (
        <DistanceFilterItemLi onClick={onClick} isSelected={isSelected}>
            <DistanceFilterItemText>
                {text}
            </DistanceFilterItemText>
        </DistanceFilterItemLi>
    )
}


export default DistanceFilterItem;