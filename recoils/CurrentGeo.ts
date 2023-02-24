import { atom } from "recoil";


export interface Geo {
    latitude: number;
    longitude: number;
}


const DEFAULT_LAT = 37.3595704;
const DEFAULT_LNG = 127.105399;


export const CurrentGeoAtom = atom<Geo>({
    key: 'currentGeoState',
    default: {
        latitude:DEFAULT_LAT,
        longitude:DEFAULT_LNG
    }
})