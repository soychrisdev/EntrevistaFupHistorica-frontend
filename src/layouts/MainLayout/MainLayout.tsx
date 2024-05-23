import Navbar from "@/components/Navbar/Navbar"
import useNavbar from "@/hooks/useNavbar"
import { Outlet } from "react-router-dom"

export default function MainLayout() {

    const { themeHandler, desktopMenuHandler, desktopMenuState, mobileMenuHandler, mobileMenuState, accessibilityClick } = useNavbar()

    return (
        <>
            <Navbar title='Entrevistas flujo razonable' username='' fontSizeHandler={accessibilityClick} themeHandler={themeHandler} desktopMenuHandler={desktopMenuHandler} mobileMenuHandler={mobileMenuHandler} mobileMenuState={mobileMenuState} desktopMenuState={desktopMenuState} />
            <div className='container'>
                <Outlet />
            </div>
        </>
    )
}