import useCurrentGeo from "@/hooks/useCurrentGeo";
import useNaverMaps from "@/hooks/useNaverMaps";
import styled from "@emotion/styled";
import { useEffect } from "react";


const MapWrapper = styled.div`
width: 1470px;
height: 860px;
`

const NaverMaps = () => {

    const [currentGeo, setCurrentGeo] = useCurrentGeo();
    const [setNaverMap] = useNaverMaps();


    useEffect(() => {
        const { latitude, longitude } = currentGeo;
        const mapOptions = {
            center: new naver.maps.LatLng(latitude, longitude),
            zoom: 10
        };

        const map = new naver.maps.Map('map', mapOptions);
        setNaverMap(map);

        console.log(map)

    },[])


    return (
        <MapWrapper id='map'>


        </MapWrapper>
    )
}


export default NaverMaps;