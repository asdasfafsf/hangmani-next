import useCurrentGeo from "@/hooks/useCurrentGeo";
import useNaverMaps from "@/hooks/useNaverMaps";
import styled from "@emotion/styled";
import { useEffect } from "react";




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
    const [currentGeo, setCurrentGeo] = useCurrentGeo();
    const [naverMap, setNaverMap] = useNaverMaps();

    useEffect(() => {
        const { latitude, longitude } = currentGeo;

  
        const map = naverMap ?? new naver.maps.Map('map', {
            center: new naver.maps.LatLng(37.3595704, 127.105399),
            zoom: 10
        });
        

        console.log(currentGeo)

        setNaverMap(map);
        map.setCenter(new naver.maps.LatLng(latitude, longitude))
        console.log(map.getCenter())

    },[currentGeo])



    return (
        <MapWrapper>
            <Map id='map'>

            </Map>

        </MapWrapper>
    )
}


export default NaverMaps;