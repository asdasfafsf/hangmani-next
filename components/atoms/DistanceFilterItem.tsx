import styled from "@emotion/styled";


const DistanceFilterItemLi = styled.li`
    display: flex;
    list-style: none;
    border-radius: 20px;
    width: 100px;
    height: 40px;
    background-color: #707070;
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

    color: #FFFFFF;
`

const DistanceFilterItem = () => {

    return (
        <DistanceFilterItemLi>
            <DistanceFilterItemText>
                500m
            </DistanceFilterItemText>
        </DistanceFilterItemLi>
    )
}


export default DistanceFilterItem;