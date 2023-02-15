import {
    atom
} from 'recoil';

export interface StoreSortFilter {
    isSelected: boolean;
    text: string;
}

export const StoreSortFilterAtom = atom<StoreSortFilter[]>({
    key: 'storeSortFilterState',
    default: [
        {
            isSelected: true,
            text: '거리 순'
        },
        {
            isSelected: false,
            text: '1등 배출 순'
        },
        {
            isSelected: false,
            text: '2등 배출 순'
        }
    ]
})