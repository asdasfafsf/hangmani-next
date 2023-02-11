import { MainTabAtom, MainTabItemInterface } from "@/recoils/MainTab";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

export const useMainTab = () => {
    const [mainTabList, setMainTabList] = useRecoilState<MainTabItemInterface[]>(MainTabAtom);

    const select = (index: number) => {
        if (index >= mainTabList.length) {
            return;
        }

        console.log(`왜아무일도안일어나누 ${index}`);
        const updatedMaintabList: MainTabItemInterface[] = mainTabList.map(elem => {return {name: elem.name, isSelected: false}});
        updatedMaintabList[index] = {
            name : updatedMaintabList[index].name,
            isSelected: true
        }
        setMainTabList([...updatedMaintabList]);

        console.log(updatedMaintabList);
    }

    return [
        mainTabList,
        select,
    ] as const;
}


export default useMainTab;