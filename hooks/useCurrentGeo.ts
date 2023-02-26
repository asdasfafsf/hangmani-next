import { CurrentGeoAtom } from "@/recoils/CurrentGeo";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const useCurrentGeo = () => {

    const [currentGeo, setCurrentGeo] = useRecoilState(CurrentGeoAtom);


    
    return [currentGeo, setCurrentGeo] as const;
};



export default useCurrentGeo;