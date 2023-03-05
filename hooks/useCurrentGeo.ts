import { hasAuthority, hasGeolocation, getGeo } from "@/lib/geo";
import { CurrentGeoAtom } from "@/recoils/CurrentGeo";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const useCurrentGeo = () => {

    const [currentGeo, setCurrentGeo] = useRecoilState(CurrentGeoAtom);


    const handleCurrentGeo = async () => {
        if (hasGeolocation() === false) {
            alert('GPS를 사용 불가능 한 상태입니다. 최신 브라우저에서 접속해주세요.');
            return;
        }

        if (await hasAuthority() === false) {
            alert('위치권한이 없습니다. 권한을 허용해주세요');
            return false;
        }

        const geo = await getGeo();
        setCurrentGeo(geo);
    }

    
    return [currentGeo, handleCurrentGeo] as const;
};



export default useCurrentGeo;