import Head from "next/head";
import { ReactNode } from "react"
import TopNavbar from "./TopNavbar";

interface HeaderProps {
    children: ReactNode;
}

const Header = ({children}: HeaderProps) => {

    return <>
        <TopNavbar></TopNavbar>
    </>
}


export default Header;