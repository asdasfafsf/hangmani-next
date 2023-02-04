import { ReactNode } from "react"
import Footer from "../templates/Footer";
import Header from "../templates/Header";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Header></Header>
                {children}
            <Footer />
        </>
    )
}


export default Layout;