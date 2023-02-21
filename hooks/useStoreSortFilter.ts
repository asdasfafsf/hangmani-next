import { StoreSortFilterAtom, StoreSortFilter } from "@/recoils/StoreSortFilter";
import { useRecoilState } from "recoil";

const useStoreSortFilter = () => {

    const [storeList, setStoreFilter] = useRecoilState<StoreSortFilter[]>(StoreSortFilterAtom);
    const select = (index: number) => {
        const copied = storeList.map(elem => {
            const { isSelected, text } = elem;

            return {
                isSelected: false,
                text
            }
        });

        copied[index].isSelected = true;
        setStoreFilter(copied);
    }

    return [
        storeList,
        select as any
    ]

}

export default useStoreSortFilter;