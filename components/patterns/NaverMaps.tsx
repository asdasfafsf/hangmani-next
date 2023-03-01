import useCurrentGeo from "@/hooks/useCurrentGeo";
import useNaverMaps from "@/hooks/useNaverMaps";
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";




const MapWrapper = styled.div`
    position: relative;
    width: 1470px;
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
        const createdNaverMap = new naver.maps.Map(mapElem.current || 'map', {
            center: new naver.maps.LatLng(37.3595704, 127.105399),
            zoom: 1000
        });
        
        // if (!naverMap) {
        //     setNaverMap(createdNaverMap);
        // }

        // createdNaverMap.setCenter(new naver.maps.LatLng(latitude, longitude))


    },[])

    useEffect(() => {
        
    }, [currentGeo])



    return (
        <MapWrapper>
            <Map id='map' ref={mapElem}>

            </Map>

        </MapWrapper>
    )
}


export default NaverMaps;