import styled from "@emotion/styled";
import { useEffect } from "react";


const MapWrapper = styled.div`
    width: 1000px;
    height: 500px;
`

const NaverMaps = () => {

    useEffect(() => {
        const mapOptions = {
            center: new naver.maps.LatLng(37.3595704, 127.105399),
            zoom: 10
        };

        const map = new naver.maps.Map('map', mapOptions);
    })

    return (
        <MapWrapper id='map'>


        </MapWrapper>
    )
}


export default NaverMaps;