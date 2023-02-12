import styled from "@emotion/styled";
import FilterSelectorItem from "../atoms/FilterSelectorItem";

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


const FilterSelector = () => {


    return (
        <FilterSelectorWrapper>
            <FilterSelectUl>
                <FilterSelectorItem isSelected={true} text={'Lotto 6/45'} />
                <FilterSelectorItem isSelected={false} text={'연금복권 720'} />
                <FilterSelectorItem isSelected={false} text={'스피또 500'} />
                <FilterSelectorItem isSelected={false} text={'스피또 1000'} />
                <FilterSelectorItem isSelected={false} text={'스피또 2000'} />
            </FilterSelectUl>
        </FilterSelectorWrapper>
    )
}


export default FilterSelector;