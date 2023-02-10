import styled from "@emotion/styled";
import MainTabItem from "../atoms/MainTabItem";



const TabNav = styled.nav`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 140px;
    background-color: #EEEEEE;
    border-bottom: 0.5px solid #FF7044;
    box-sizing: border-box;
`

const TabUl = styled.ul`
    list-style: none;
    display: flex;
    height: 46px;
    /* background-color: white; */
    padding: 0px;
    /* width: 500px; */
    gap: 10px;
    margin: 0px;
`


const MainTab = () => {

    return (
        <TabNav>
            <TabNav>
                <TabUl>
                    <MainTabItem 
                    
                    />
                    <MainTabItem 
                    
                    />
                </TabUl>
            </TabNav>
        </TabNav>
    )
}


export default MainTab;