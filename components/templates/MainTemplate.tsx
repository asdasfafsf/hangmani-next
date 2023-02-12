import GridMain from "../patterns/GridMain";
import MainTab from "../patterns/MainTab";
import styled from "@emotion/styled";

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 200px;
`

const MainTemplate = () => {


    return (
        <>
            <MainTab />
            <Section>
                <GridMain />
            </Section>
        </>
    )
}



export default MainTemplate;