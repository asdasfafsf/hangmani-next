import { MainTabAtom, MainTabItemInterface } from "@/recoils/MainTab";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

export const useMainTab = () => {
    const [mainTabList, setMainTabList] = useRecoilState<MainTabItemInterface[]>(MainTabAtom);

    const select = useCallback((index: number) => {
        if (index >= mainTabList.length) {
            return;
        }

        const updatedMaintabList: MainTabItemInterface[] = mainTabList.map(elem => {
            elem.isSelected = false;
            return elem;
        });

        updatedMaintabList[index].isSelected = true;
        setMainTabList(updatedMaintabList);
    }, [])
    
    return [
        mainTabList as MainTabItemInterface[],
        select as Function
    ] as const;
}


export default useMainTab;