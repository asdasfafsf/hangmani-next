import { GridMainAtom, GridMainInterface, StoreInterface } from '@/recoils/GridMain';
import { MainTabAtom, MainTabItemInterface } from '@/recoils/MainTab';
import { useEffect } from 'react';
import {
    useRecoilState, useRecoilValue
} from 'recoil';

const useGridMain = () => {

    const mainTabList = useRecoilValue<MainTabItemInterface[]>(MainTabAtom);
    const [gridMain, setGridMain] = useRecoilState(GridMainAtom);


    const caller = async () => {
        const rank = mainTabList.findIndex(elem => elem.isSelected);

        if (rank === -1) {
            return;
        }

        const data = await fetch(`/api/v1/rank?rank=${rank + 1}`)
                                .then(data => data.json())
                                .then(value => value.data);

        const storeList: StoreInterface[] = data.map((elem: any) => elem);
        const newGridMain:GridMainInterface = {
            lat: 99,
            long: 99,
            rank: rank + 1,
            storeList: storeList
        };

        console.log(storeList);
        setGridMain(newGridMain);
    }


    useEffect(() => {
        const data: GridMainInterface = {
            lat: 0.0,
            long: 0.0,
            rank: 1,
            storeList: []
        };
        setGridMain(data);
        caller();
    }, [])

    useEffect(() => {
        caller();
    }, [mainTabList])
    
    return [gridMain];
}


export default useGridMain;