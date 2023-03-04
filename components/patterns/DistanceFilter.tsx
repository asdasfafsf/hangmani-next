import useDistanceFilter from "@/hooks/useDistanceFilter";
import styled from "@emotion/styled";
import DistanceFilterItem from "../atoms/DistanceFilterItem";

const DistanceFilterWrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0px;
    width: 1450px;
    height: 60px;
    padding: 0px;
    list-style: none;
`


const DistanceFilter = () => {
    const [distanceFilter, select] = useDistanceFilter();
    return (
        <DistanceFilterWrapper>
            {
                distanceFilter.map((elem, index) => {
                    const handleClick = (e: any) => select(index);
                    return <DistanceFilterItem 
                                isSelected={elem.isSelected} 
                                distance={elem.distance} 
                                text={elem.text} 
                                onClick={handleClick} 
                            />
                })
            }
        </DistanceFilterWrapper>
    )
}

export default DistanceFilter;