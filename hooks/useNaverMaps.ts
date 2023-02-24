import { useEffect } from "react";
import { hasGeolocation, hasAuthority, getGeo } from "@/lib/geo";
import { Geo } from "@/lib/types/Geo";
import { Geo as GeoInterface } from "@/recoils/CurrentGeo";
import { CurrentGeoAtom } from "@/recoils/CurrentGeo";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";


const useNaverMaps = () => {
    const [currentGeo, setCurrentGeo] = useRecoilState<GeoInterface>(CurrentGeoAtom);
    const router = useRouter();

    useEffect(() => {

        const initialize = async () => {

            if (hasGeolocation() === false) {
                alert('geolocation이 없습니다.');
                router.back();

                return false;
            }

            if (await hasAuthority() === false) {
                alert('지도 권한이 없습니다.');
                router.back();

                return false;
            }


            const geo: Geo = await getGeo();
            const { latitude, longitude } = geo;

            setCurrentGeo({
                latitude,
                longitude
            });

            const mapOptions = {
                center: new naver.maps.LatLng(latitude, longitude),
                zoom: 10
            };
    
            const map = new naver.maps.Map('map', mapOptions);
        }

        
        initialize();
    }, [])


    return [];
}

export default useNaverMaps;