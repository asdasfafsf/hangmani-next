import { ReactNode } from "react"
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {

    return (
        <>
        <Header children={children}></Header>
        </>
    )
}


export default Layout;