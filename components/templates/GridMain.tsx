import styled from "@emotion/styled";
import Card from "../atoms/Card";

const GridWrapper = styled.div`
    display: grid;
    /* width: 100vw; */
    /* width: 100%; */
    min-width: 1070px;
    max-width: 1200px;
    grid-template-columns: repeat(auto-fit, minmax(288px, auto));
    /* padding: 5px; */
    row-gap: 30px;
    column-gap: 10px;
    box-sizing: border-box;
    align-items: center;
    justify-items: center;
`

const GridMain = () => {
    return (<GridWrapper>
        {
            Array.from({length : 30}, () => 1)
                .map((elem) => <Card key={elem + Math.random()}/>)
        }



    </GridWrapper>)
}



export default GridMain;