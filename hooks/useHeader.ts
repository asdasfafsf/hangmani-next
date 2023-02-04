import {
    useRecoilValue,
    useRecoilState
} from 'recoil';
import { HeaderAtom } from '@/recoils/Header';
import { useCallback } from 'react';

const useHeader = () => {
    const [header, setHeader] = useRecoilState(HeaderAtom)

    return {
        header
    }
}


export default useHeader;