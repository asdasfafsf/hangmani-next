import {
    atom
} from 'recoil';


export interface GridMainInterface {
    lat: number;
    long: number;
    rank: number;
    storeList: StoreInterface[]
}


export interface StoreInterface {
    rank: number;
    winCount: number;
    storeName: string;
    thumbnail: string;
}

const data: GridMainInterface = {
    lat: 0.0,
    long: 0.0,
    rank: 1,
    storeList: []
}

export const GridMainAtom = atom({
    key: 'gridMainState',
    default: data
})