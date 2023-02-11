import styled from "@emotion/styled";
import { MainTabItemInterface } from "@/recoils/MainTab";
import { memo } from "react";
import { css } from "@emotion/react";



interface MainTabItemProps {
    name: string;
    isSelected: boolean;
    onClick: React.MouseEventHandler<HTMLElement>
}


const DynamicMainTabItemLiStyle = ({isSelected}: MainTabItemProps) => css`
    border-color:${(isSelected ? '#FF7044' : '#D9D9D9')};

    height: ${(isSelected ? '48px' : '46px')};


    p {
        color: ${(isSelected ? '#FF7044' : '#D9D9D9')};
    }
`


const MainTabItemLi = styled.li`
    ${DynamicMainTabItemLiStyle}
    top: 0px;
    position: relative;
    box-sizing: border-box;
    width: 296px;
    

    background: #FFFFFF;
    border-width: 1px 1px 0px 1px;
    border-style: solid;
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

   
`




const MainTabItem = ({name, isSelected, onClick}: MainTabItemProps) => {
    return (
        <MainTabItemLi isSelected={isSelected} name={""} onClick={onClick}>
            <MainTabText>
                {name}
            </MainTabText>
        </MainTabItemLi>
    );
}

export default memo(MainTabItem);