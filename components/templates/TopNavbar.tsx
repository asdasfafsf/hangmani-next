import styled from "@emotion/styled";
import Head from "next/head";
import { ReactNode } from "react"
import Logo from "../atoms/Logo";
import TopView from "./TopView";

interface TopNavBar {
    children: ReactNode;
}

const NavWrap = styled.div`
    
`

const Nav = styled.nav`
    width: 100%;
    height: 100px;
    background: #FFFFFF;
`

const Ul = styled.ul`
    list-style: none;
`

const Li = styled.li`
    
`

const TopNavBar = ({children}: TopNavBar) => {

    return (<NavWrap>
        
            <Logo />
            <TopView />
            <Nav>
                <Ul>
                    <Li>

                    </Li>
                </Ul>
            </Nav>
        </NavWrap>)
}


export default TopNavBar;