import { LottoTypeFilterAtom, LottoTypeFilter } from "@/recoils/LottoTypeFilter";
import { useRecoilState } from "recoil";

const useLottoTypeFilter = () => {
    const [lottoTypeFilter, setLottoTypeFilter] = useRecoilState<LottoTypeFilter[]>(LottoTypeFilterAtom)

    const handleClick = (index: number) => {

        const copied = lottoTypeFilter.map(elem => {
            const { isSelected, text } = elem;
            
            return {
                isSelected,
                text
            };
        });
        copied[index].isSelected = !copied[index].isSelected;

        setLottoTypeFilter(copied);
    }

    return [
        lottoTypeFilter as LottoTypeFilter[],
        handleClick as any
    ];

}

export default useLottoTypeFilter;