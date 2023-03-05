import { useEffect } from "react";
import {
    useRecoilState
} from 'recoil';
import { HeaderAtom } from "@/recoils/Header";
import { ResizeLimitAtom } from "@/recoils/ResizeLimit";
import { HEADER_AREA_SIZE, MIN_WIDTH } from "@/lib/constants";

export const useLayout = () => {
    const [header, setHeader] = useRecoilState(HeaderAtom);
    const [isResizeLimit, setResizeLimit] = useRecoilState(ResizeLimitAtom);


    const handleScroll = async () => setHeader(HEADER_AREA_SIZE <= window.scrollY)
    const handleResize = async () => setResizeLimit(MIN_WIDTH <= window.innerWidth)

    useEffect(() => {
        handleScroll();
        handleResize();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        window.removeEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScroll);
    }, [header])

    useEffect(() => {
        window.removeEventListener('resize', handleResize);
        window.addEventListener('resize', handleResize);
    }, [isResizeLimit])


    return {
        header,
        setHeader,
        isResizeLimit,
        setResizeLimit
    } as const;
}


export default useLayout;