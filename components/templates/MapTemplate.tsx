import styled from "@emotion/styled";
import FilterSelector from "../patterns/FilterSelector";


const Wrapper = styled.div`
    top: 100px;
    position: relative;
    display: flex;
    width: 100%;
    height: 100vh;
`

const Section = styled.section`
`


const Aside = styled.aside`
    
    width: 450px;
    height: 100%;
    border: 1px solid black;
`

const MainTemplate = () => {


    return (

        <Wrapper>
            <Aside>
                <FilterSelector />
                <FilterSelector />

            </Aside>
                
            <Section>
            </Section>
        </Wrapper>
    )
}



export default MainTemplate;