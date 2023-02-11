import { MainTabAtom, MainTabItemInterface } from "@/recoils/MainTab";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

export const useMainTab = () => {
    const [mainTabList, setMainTabList] = useRecoilState<MainTabItemInterface[]>(MainTabAtom);

    const select = useCallback((index: number) => {
        if (index >= mainTabList.length) {
            return;
        }

        const updatedMaintabList: MainTabItemInterface[] = mainTabList.map(elem => {return {name: elem.name, isSelected: false}});


        updatedMaintabList[index].isSelected = true;
        setMainTabList(updatedMaintabList);
    }, [])


    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();

        console.log(e.target);

    }
    
    return [
        mainTabList,
        select,
        handleClick
    ] as const;
}


export default useMainTab;