import styled from "@emotion/styled";
import StoreCard from "../atoms/StoreCard";
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
    /* border: 1px solid black; */
`

const MainTemplate = () => {


    return (

        <Wrapper>
            <Aside>
                <FilterSelector />
                <FilterSelector />
                <StoreCard 
                    oneWinCount={10}
                    twoWinCount={25}
                    storeName={"나눔로또판매점"} 
                    distance={"50m"} 
                    storeAddr={"서울특별시 영등포구 영등포동가 10-13"} 
                    lottoTypeList={['lotto6/45', 'speeto', 'speeto2000']} 
                />
                <StoreCard 
                    oneWinCount={10}
                    twoWinCount={25}
                    storeName={"나눔로또판매점"} 
                    distance={"50m"} 
                    storeAddr={"서울특별시 영등포구 영등포동가 10-13"} 
                    lottoTypeList={['lotto6/45', 'speeto', 'speeto2000']} 
                />
                <StoreCard 
                    oneWinCount={10}
                    twoWinCount={25}
                    storeName={"나눔로또판매점"} 
                    distance={"50m"} 
                    storeAddr={"서울특별시 영등포구 영등포동가 10-13"} 
                    lottoTypeList={['lotto6/45', 'speeto', 'speeto2000']} 
                />
                <StoreCard 
                    oneWinCount={10}
                    twoWinCount={25}
                    storeName={"나눔로또판매점"} 
                    distance={"50m"} 
                    storeAddr={"서울특별시 영등포구 영등포동가 10-13"} 
                    lottoTypeList={['lotto6/45', 'speeto', 'speeto2000']} 
                />
            </Aside>
                
            <Section>
                
            </Section>
        </Wrapper>
    )
}



export default MainTemplate;