import { DistanceFilterAtom, DistanceFilter } from "@/recoils/DistanceFilter";
import { useRecoilState } from "recoil";


const useDistanceFilter = () => {
    const [distanceFilter, setDistanceFilter] = useRecoilState<DistanceFilter[]>(DistanceFilterAtom)

    const handleClick = (index: number) => {

        const copied: DistanceFilter[] = distanceFilter.map(elem => {
            const { text, distance } = elem;
            const isSelected = false;

            return {
                isSelected,
                distance,
                text
            };
        });
        copied[index].isSelected = !copied[index].isSelected;

        setDistanceFilter(copied);
    }

    return [
        distanceFilter as DistanceFilter[],
        handleClick as any
    ] as const;

}

export default useDistanceFilter;