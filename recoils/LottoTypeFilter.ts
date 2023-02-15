import {
    atom
} from 'recoil';


export interface LottoTypeFilter {
    isSelected: boolean;
    text: string;
}

export const LottoTypeFilterAtom = atom<LottoTypeFilter[]>({
    key: 'lottoTypeFilter',
    default: [
        {
            isSelected: true,
            text: 'Lotto 6/45'
        },
        {
            isSelected: false,
            text: '연금복권 720'
        },
        {
            isSelected: false,
            text: '스피또 500'
        },
        {
            isSelected: false,
            text: '스피또 1000'
        },
        {
            isSelected: false,
            text: '스피또 2000'
        }
    ]
})