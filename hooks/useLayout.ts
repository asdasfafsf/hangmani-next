import { useEffect } from "react";
import {
    useRecoilState
} from 'recoil';
import { HeaderAtom } from "@/recoils/Header";
import { HEADER_AREA_SIZE } from "@/lib/constants";

export const useLayout = () => {
    const [header, setHeader] = useRecoilState(HeaderAtom)


    const handleScroll = async () => setHeader(HEADER_AREA_SIZE <= window.scrollY)
    
    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
    }, [])

    useEffect(() => {
        window.removeEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScroll);
    }, [header])

    return {
        header,
        setHeader
    }
}


export default useLayout;