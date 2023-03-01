import useCurrentGeo from "@/hooks/useCurrentGeo";
import useNaverMaps from "@/hooks/useNaverMaps";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";




const MapWrapper = styled.div`
    position: relative;
    width: 1450px;
    height: 860px;
`

const Map = styled.div`
    width: 100%;
    height: 100%;
`

const NaverMaps = () => {
    const mapElem = useRef(null);

    const [currentGeo, setCurrentGeo] = useCurrentGeo();
    const [naverMap, setNaverMap] = useNaverMaps();


    useEffect(() => {
        const { latitude, longitude } = currentGeo;        
        const createdNaverMap = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(latitude, longitude),
            zoom: 1000
        })


        if (!naverMap) {
            setTimeout(() => {
                setNaverMap(createdNaverMap)
            }, 500)
        }
    },[])

    useEffect(() => {   
        if (naverMap) {

        }
    }, [naverMap])



    return (
        <MapWrapper>
            <Map id='map' ref={mapElem}>

            </Map>

        </MapWrapper>
    )
}


export default NaverMaps;