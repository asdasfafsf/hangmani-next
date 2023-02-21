import styled from "@emotion/styled";
import FilterSelectorItem from "../atoms/FilterSelectorItem";


interface FilterSelectorProps {
    itemList: FilterSelectorItemProps[];
    handleClickItem(index: number): any;
}

interface FilterSelectorItemProps {
    isSelected: boolean;
    text: string;
}


const FilterSelectorWrapper = styled.nav`
    margin: 0px;
    width: 100%;
`

const FilterSelectUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0px;
    padding: 15px;
    gap: 15px;
    width: 100%;
    box-sizing: border-box;
`


const FilterSelector = ({itemList, handleClickItem}:FilterSelectorProps) => {


    return (
        <FilterSelectorWrapper>
            <FilterSelectUl>
                {
                    itemList.map((elem, index) => <FilterSelectorItem 
                                            key={elem.text}
                                            isSelected={elem.isSelected} 
                                            text={elem.text}
                                            onClick={() => handleClickItem(index)}
                                        />)
                }
                
            </FilterSelectUl>
        </FilterSelectorWrapper>
    )
}


export default FilterSelector;