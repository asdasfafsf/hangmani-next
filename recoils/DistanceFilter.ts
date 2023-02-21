import {
    atom
} from 'recoil';


export interface DistanceFilter {
    isSelected: boolean;
    distance: number;
    text: string;
}

export const DistanceFilterAtom = atom<DistanceFilter[]>({
    key: 'distanceFilterAtom',
    default: [
        {
            isSelected: true,
            distance: 500,
            text: '500m'
        },
        {
            isSelected: false,
            distance: 1000,
            text: '1km'
        },
        {
            isSelected: false,
            distance: 2000,
            text: '2km'
        },
        {
            isSelected: false,
            distance: 5000,
            text: '5km'
        },
        {
            isSelected: false,
            distance: 10000,
            text: '10km'
        },
        {
            isSelected: false,
            distance: 20000,
            text: '20km'
        },
        {
            isSelected: false,
            distance: 0,
            text: '전국'
        }
    ]
})