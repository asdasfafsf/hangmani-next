import useCurrentGeo from "@/hooks/useCurrentGeo";
import useNaverMaps from "@/hooks/useNaverMaps";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import SquareButton from "../atoms/SquareButton";




const Wrapper = styled.div`
    position: relative;
    width: 1450px;
    height: 860px;
`


const MapWrapper = styled.div`
    position: relative;
    width: 1450px;
    height: 860px;
`

const Map = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    * {
        z-index: 5;
    }
`


const ReloadWrapper = styled.div`
    position: absolute;
    width: 130px;
    height: 43px;
    left: 1230px;
    top: 60px;
    z-index: 5;
`

const CurrentLocateWrapper = styled.div`
    z-index: 5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* padding: 10px 20px; */
    /* box-sizing: border-box; */
    gap: 10px;

    position: absolute;
    width: 257px;
    height: 43px;
    left: 30px;
    top: 60px;

    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
`


const NaverMaps = () => {
    const mapElem = useRef(null);
    const mapWrapElem = useRef(null);

    const [currentGeo, setCurrentGeo] = useCurrentGeo();
    const [naverMap, setNaverMap] = useNaverMaps();


    useEffect(() => {
        const { latitude, longitude } = currentGeo;        
        const createdNaverMap = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(latitude, longitude),
            zoom: 10
        })


        if (!naverMap) {
            setTimeout(() => {
                setNaverMap(createdNaverMap)
            }, 500)
        }
    },[])




    return (
        <>
            <Wrapper>
            <MapWrapper ref={mapWrapElem}>
                <Map id='map' ref={mapElem}>
                </Map>
                <CurrentLocateWrapper>
                현 위치 : 경기 성남시 분당구 야탑동
                </CurrentLocateWrapper>
                <ReloadWrapper>
                    <SquareButton 
                        width="130px"
                        height="43px"
                        color="#FF7044;"
                        textColor="white"
                        text="이 지역 재검색"
                    />
                </ReloadWrapper>
            </MapWrapper>
            </Wrapper>
     
        </>
    )
}


export default NaverMaps;