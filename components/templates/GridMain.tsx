import styled from "@emotion/styled";
import Card from "../atoms/Card";

const GridWrapper = styled.div`
    display: grid;

`

const GridMain = () => {

    return (<GridWrapper>
        {
            Array.from({length : 30}, () => 1)
                .map(elem => <Card />)
        }



    </GridWrapper>)
}



export default GridMain;