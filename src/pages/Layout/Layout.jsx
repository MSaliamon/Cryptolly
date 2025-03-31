import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Main from "../../components/main/Main"
import { Outlet } from "react-router-dom"


function Layout() {
  return (
    <>
        <Header />
        <Main >
            <Outlet />
        </Main>
        <Footer />
    </>
  )
}

export default Layout