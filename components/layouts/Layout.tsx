import { ReactNode, useEffect } from "react"
import Footer from "../templates/Footer";
import Header from "../templates/Header";

import { HEADER_AREA_SIZE } from "@/lib/constants";
import useLayout from "@/hooks/useLayout";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    const { header, setHeader} = useLayout();

    return (
        <>
            <Header children={children}></Header>
                {children}
            <Footer />
        </>
    )
}


export default Layout;