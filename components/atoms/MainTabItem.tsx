import styled from "@emotion/styled";
import { MainTabItemInterface } from "@/recoils/MainTab";



interface MainTabItemProps {
    mainTabItem: MainTabItemInterface
}

const MainTabItemLi = styled.li`
    top: 0px;
    position: relative;
    box-sizing: border-box;
    width: 296px;
    height: 48px;

    background: #FFFFFF;
    border-width: 1px 1px 0px 1px;
    border-style: solid;
    border-color: #FF7044;
    border-radius: 4px 4px 0px 0px;


    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`

const MainTabText = styled.p`
    margin: 0px;
    padding: 0px;

    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    letter-spacing: -0.05em;

    color: #FF7044;
`



const MainTabItem = ({mainTabItem}: MainTabItemProps) => {
    return (
        <MainTabItemLi>
            <MainTabText>
                {mainTabItem.name}
            </MainTabText>
        </MainTabItemLi>
    );
}

export default MainTabItem;