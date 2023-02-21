import { css } from "@emotion/react";
import styled from "@emotion/styled";


interface FilterSelectorItem {
    isSelected: boolean;
    text: string;
    onClick: React.MouseEventHandler<HTMLElement>
}

interface FilterSelectorStyleProps {
    isSelected: boolean;
}

const DynamicFilterSelectorItemStyle = ({isSelected}: FilterSelectorStyleProps) => css`
    border: ${(isSelected ? '1px solid #FF7044;': '1px solid #D9D9D9;')}


    p {
        color: ${(isSelected ? '#FF7044': '#D9D9D9')}
    }
`

const FilterSelectorItemLi = styled.li`
    ${DynamicFilterSelectorItemStyle}
    list-style: none;
    margin: 0px;
    padding: 6px 12px;
    background: #FFFFFF;
    border-radius: 4px;
    align-items: center;

    cursor: pointer;

`


const FilterSelectorText = styled.p`
    margin: 0px;
    padding: 0px;
    height: 20px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.05em;
`

const FilterSelectorItem = ({isSelected, text, onClick}: FilterSelectorItem) => {

    return (
       <FilterSelectorItemLi isSelected={isSelected} onClick={onClick}>
            <FilterSelectorText>
                {text}
            </FilterSelectorText>
       </FilterSelectorItemLi>
    )
}


export default FilterSelectorItem;