import useCurrentGeo from "@/hooks/useCurrentGeo";
import useNaverMaps from "@/hooks/useNaverMaps";
import styled from "@emotion/styled";
import React, { useContext, useEffect, useRef, useState } from "react";
import SquareButton from "../atoms/SquareButton";
import { transpileJSXToHTML } from "@/lib/utils";

import { NaverMapContext } from "../templates/MapTemplate";


const Wrapper = styled.div`
    position: relative;
    width: 1450px;
    height: 860px;
`


const MapWrapper = styled.div`
    position: relative;
    max-width: 1450px;
    width: 1450px;
    height: 860px;
    z-index: 6;
`

const Map = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    * {
        z-index: 7;
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


    const { naverMap, setNaverMap } = useContext(NaverMapContext);
    
    useEffect(() => {
        const { latitude, longitude } = currentGeo;        
        const createdNaverMap = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(latitude, longitude),
            zoom: 10,
            scrollWheel: false,
        });
        setNaverMap(createdNaverMap);

    },[])





    return (
        <>
            <MapWrapper ref={mapWrapElem}>
                <Map id='map' ref={mapElem}>
                </Map>
                <CurrentLocateWrapper>현재 위치 : 서울시 노원구</CurrentLocateWrapper>
                <ReloadWrapper>
                    <SquareButton 
                    
                    />
                </ReloadWrapper>
            </MapWrapper>
     
        </>
    )
}


export default NaverMaps;