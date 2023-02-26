import { atom } from "recoil";




export const NaverMapAtom = atom<naver.maps.Map | null>({
    key: 'naverMapState',
    default: null
})