import styled from "@emotion/styled";


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

                
            </Aside>
                
            <Section>
            </Section>
        </Wrapper>
    )
}



export default MainTemplate;