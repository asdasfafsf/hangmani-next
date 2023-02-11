import { atom  } from "recoil";



export interface MainTabItemInterface {
    name: string;
    isSelected: boolean;
}

const mainTabItemList: MainTabItemInterface[] = [
    {
        name: '1등',
        isSelected: false,
    },
    {
        name: '2등',
        isSelected: false,
    }
]


export const MainTabAtom = atom({
    key: 'mainTabState',
    default: mainTabItemList
});