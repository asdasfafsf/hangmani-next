import styled from "@emotion/styled";
import Card from "../atoms/Card";
import useGridMain from "@/hooks/useGridMain";

const GridWrapper = styled.div`
    display: grid;
    /* width: 100vw; */
    width: 100%;
    min-width: 1070px;
    max-width: 1200px;
    grid-template-columns: repeat(auto-fit, minmax(288px, auto));
    /* padding: 5px; */
    row-gap: 30px;
    column-gap: 10px;
    box-sizing: border-box;
    align-items: center;
    justify-items: center;
`

const GridMain = () => {
    const [gridMain] = useGridMain();

    return (<GridWrapper>
        {
            gridMain.storeList.map( (elem, index) => {
                return (<Card 
                            key={index + Math.random()} 
                            rank={elem.rank} 
                            winCount={elem.winCount} 
                            storeName={elem.storeName} 
                            thumbnail={elem.thumbnail}                            
                        />)
            })


        }
    </GridWrapper>)
}



export default GridMain;