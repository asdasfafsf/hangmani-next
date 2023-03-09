import useLottoTypeFilter from "@/hooks/useLottoTypeFilter";
import useStoreSortFilter from "@/hooks/useStoreSortFilter";
import styled from "@emotion/styled";
import { createContext, useState } from "react";
import StoreCard from "../atoms/StoreCard";
import DistanceFilter from "../patterns/DistanceFilter";
import FilterSelector from "../patterns/FilterSelector";
import NaverMaps from "../patterns/NaverMaps";







const Wrapper = styled.div`
    top: 100px;
    position: relative;
    display: flex;
    /* justify-contents: center; */
    width: 100vw;
    height: 100vh;
    overflow: scroll;
`

const Section = styled.section`
    width: 100%;
    /* max-width:1450px; */
    display: flex;
    justify-content: center;
`

const SectionWrap = styled.div`
    width: 100%;
`


const Aside = styled.aside`
    width: 450px;
    height: 100%;
    /* border: 1px solid black; */
`

const FilterSelectorWrap = styled.div`
    border: 1px solid lightgray;
    box-sizing: border-box;
`
export interface NaverMapWrap{
    naverMap?: naver.maps.Map | null;
    setNaverMap?: any;
}
export const NaverMapContext = createContext<NaverMapWrap>({});

const MainTemplate = () => {
    const [lottoTypeFilter, handleClickLottoTypeFilter] = useLottoTypeFilter();
    const [storeSortFilter, handleClickStoreSortFilter] = useStoreSortFilter();
    
    const [naverMap, setNaverMap] = useState<naver.maps.Map | null>(null);
    

    return (
        <NaverMapContext.Provider value={{naverMap, setNaverMap}}>
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
                    <SectionWrap>
                        <DistanceFilter />
                        <NaverMaps />
                    </SectionWrap>
                </Section>
            </Wrapper>
        </ NaverMapContext.Provider>
    )
}



export default MainTemplate;