import { atom } from "recoil";


export const NaverMapAtom = atom<naver.maps.Map>({
    key: 'naverMapState',
    default: undefined
})