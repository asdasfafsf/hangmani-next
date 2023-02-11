import { atom  } from "recoil";



export interface MainTabItemInterface {
    name: string;
    isSelected: boolean;
}

export const MainTabAtom = atom({
    key: 'mainTabState',
    default: [
        {
            name: '1등 배출 순위',
            isSelected: true,
        },
        {
            name: '2등 배출 순위',
            isSelected: false,
        }
    ]
});