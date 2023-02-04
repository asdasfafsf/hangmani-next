import Head from "next/head";
import { ReactNode } from "react"
import TopNavbar from "./TopNavbar";

interface HeaderProps {
    children: ReactNode;
}

const Header = ({children}: HeaderProps) => {

    return <>
        <TopNavbar children={children}></TopNavbar>
    </>
}


export default Header;