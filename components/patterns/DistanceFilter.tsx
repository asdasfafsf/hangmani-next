import styled from "@emotion/styled";
import DistanceFilterItem from "../atoms/DistanceFilterItem";

const DistanceFilterWrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px;
    margin-left: 10px;
    margin-right: 10px;

    width: 100%;
    height: 60px;
    list-style: none;
`


const DistanceFilter = () => {

    return (
        <DistanceFilterWrapper>
            <DistanceFilterItem />
            <DistanceFilterItem />
            <DistanceFilterItem />
            <DistanceFilterItem />
            <DistanceFilterItem />
        </DistanceFilterWrapper>
    )
}

export default DistanceFilter;