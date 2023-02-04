import useLayout from "@/hooks/useLayout";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Logo from "../atoms/Logo";
import TopView from "./TopView";
import Link from "next/link";

interface TopNavBar {
   
}

interface NavProps {
    isMerge?: boolean
}


const NavWrap = styled.div`
    height: 700px;
`

const dynamicNavStyle = (props:NavProps) => css`
    background: ${(props.isMerge ? '#707070' : '#FFFFFF')};
`
const Nav = styled.nav<NavProps>`
    ${dynamicNavStyle}
    width: 100%;
    height: 100px;
    margin: 0px;
    position: fixed;
    z-index: 50;
    display: flex;
    transition: 0.15s;
`

const Ul = styled.ul`
    display: flex;
    list-style: none;
    margin: 0px;
    height: 100%;
    align-items: center;
    justify-content: center;
`

const Li = styled.li`
    margin: 0px;

    a {
        color: black;
    }
`




const TopNavBar = ({}: TopNavBar) => {
    const { header } = useLayout()

    return (<NavWrap>
            <Nav isMerge={header}>
                <Logo />
                    <Ul>
                        <Li><Link href={"#"}>로그인</Link></Li>
                        <Li><Link href={"#"}>회원가입</Link></Li>
                        
                    </Ul>
            </Nav>
            <TopView />
        </NavWrap>)
}


export default TopNavBar;