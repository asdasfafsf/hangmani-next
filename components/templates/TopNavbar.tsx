import useLayout from "@/hooks/useLayout";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Logo from "../atoms/Logo";
import TopView from "./TopView";
import Link from "next/link";
import TopViewHeader from "./TopViewHeader";



interface TopNavBar {
   
}

interface NavProps {
    isMerge?: boolean
}


const NavWrap = styled.div`
    min-width: 1070px;
    width: 100%;
    height: 660px;
    z-index: 5;
`

const LogoWrapper = styled.div`
    width: 240px;
`



const dynamicNavStyle = (props:NavProps) => css`
    background: ${(props.isMerge ? '#707070' : '#FFFFFF')};
`
const Nav = styled.nav<NavProps>`
    ${dynamicNavStyle}
    min-width: 1070px;
    width: 100%;
    height: 100px;
    margin: 0px;
    position: fixed;
    z-index: 50;
    display: flex;
    transition: 0.15s;
`

const FlexDivLeft = styled.div`
    display: flex;
    width: 50%;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 50px;
    align-items: center;
`

const FlexDivRight = styled.div`
    align-items: center;
    display: flex;
    width: 50%;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 50px;
`


const Ul = styled.ul`
    display: flex;
    list-style: none;
    margin: 0px;
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 100%;

    a {
        color: black;
        text-decoration: none;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        /* letter-spacing: -0.05em; */
    }
`

const Li = styled.li`
    margin: 0px;
    width: 90px;
`
const NoticeLi = styled.li`
    a {
        font-style: normal;
        /* letter-spacing: -0.05em; */

        :hover {
        color: #FF7044;
        font-weight: 700;
        text-decoration: underline;
        }

    }
`





const TopNavBar = ({}: TopNavBar) => {
    const { header } = useLayout();
    
    
    return (<NavWrap>

            {!header &&
                <Nav isMerge={header}>
                    <FlexDivLeft>
                        <LogoWrapper>
                            <Logo />
                        </LogoWrapper>
                        <Ul>
                            <NoticeLi><Link href={"#"}>공지사항</Link></NoticeLi>
                        </Ul>
                    </FlexDivLeft>
                    <FlexDivRight>
                        <Ul>
                            <Li><Link href={"#"}>로그인</Link></Li>
                            <Li><Link href={"#"}>회원가입</Link></Li>
                        </Ul>
                    </FlexDivRight>
                </Nav>
            }
            {!header 
                ? <TopView />
                : <TopViewHeader />    
            }
            
        </NavWrap>)
}


export default TopNavBar;


export const FixedTopNavbar = () => {
    return (
            <Nav isMerge={false}>
                <FlexDivLeft>
                    <LogoWrapper>
                        <Logo />
                    </LogoWrapper>
                    <Ul>
                        <NoticeLi><Link href={"#"}>공지사항</Link></NoticeLi>
                    </Ul>
                </FlexDivLeft>
                <FlexDivRight>
                    <Ul>
                        <Li><Link href={"#"}>로그인</Link></Li>
                        <Li><Link href={"#"}>회원가입</Link></Li>
                    </Ul>
                </FlexDivRight>
            </Nav>  
)
}