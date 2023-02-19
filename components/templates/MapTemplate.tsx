import useLottoTypeFilter from "@/hooks/useLottoTypeFilter";
import useStoreSortFilter from "@/hooks/useStoreSortFilter";
import styled from "@emotion/styled";
import StoreCard from "../atoms/StoreCard";
import DistanceFilter from "../patterns/DistanceFilter";
import FilterSelector from "../patterns/FilterSelector";


const Wrapper = styled.div`
    top: 100px;
    position: relative;
    display: flex;
    width: 100%;
    height: 100vh;
`

const Section = styled.section`
    /* width: 100vw; */
    width: 50%;
    max-width: 1200px;
`


const Aside = styled.aside`
    width: 450px;
    height: 100%;
    /* border: 1px solid black; */
`

const FilterSelectorWrap = styled.div`
    
`

const MainTemplate = () => {
    const [lottoTypeFilter, handleClickLottoTypeFilter] = useLottoTypeFilter();
    const [storeSortFilter, handleClickStoreSortFilter] = useStoreSortFilter();
    
    return (
        <Wrapper>
            <Aside>
                <FilterSelectorWrap>
                    <FilterSelector 
                        itemList={lottoTypeFilter}
                        handleClickItem={handleClickLottoTypeFilter}
                    />
                    <FilterSelector 
                        itemList={storeSortFilter}
                        handleClickItem={handleClickStoreSortFilter}
                    />
                </FilterSelectorWrap>
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
                <DistanceFilter />
            </Section>
        </Wrapper>
    )
}



export default MainTemplate;