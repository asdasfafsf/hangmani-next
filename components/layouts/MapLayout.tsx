import { ReactNode } from "react"
import Footer from "../templates/Footer";
import { FixedTopNavbar } from "../templates/TopNavbar";

interface LayoutProps {
    children: ReactNode;
}

const MapLayout = ({children}: LayoutProps) => {
    return (
        <>
            
            <FixedTopNavbar />
            {children}
            <Footer />
        </>
    )
}


export default MapLayout;