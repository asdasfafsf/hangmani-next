import useLayout from "@/hooks/useLayout";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Logo from "../atoms/Logo";
import TopView from "./TopView";

interface TopNavBar {
   
}

interface NavProps {
    isMerge?: boolean
}


const NavWrap = styled.div`
    height: 700px;
`


const dynamicNavStyle = (props:NavProps) => css`
    transition: 0.15s;
    background: ${(props.isMerge ? '#707070' : '#FFFFFF')};
    width: 100%;
    height: 100px;
    margin: 0px;
    position: fixed;
    z-index: 50;
`
const Nav = styled.nav<NavProps>`
    ${dynamicNavStyle}
`

const Ul = styled.ul`
    list-style: none;
    margin: 0px;
`

const Li = styled.li`
    margin: 0px;
`

const TopNavBar = ({}: TopNavBar) => {
    const { header } = useLayout()

    return (<NavWrap>
            <Nav isMerge={header}>
                <Logo />
                    <Ul>
                        <Li>

                        </Li>
                    </Ul>
            </Nav>
            <TopView />
        </NavWrap>)
}


export default TopNavBar;