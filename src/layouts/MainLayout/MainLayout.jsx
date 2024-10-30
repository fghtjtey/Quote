// from react router dom
import { Outlet } from "react-router-dom"

// from layouts
import { Header, Footer } from "../"

function MainLayout() {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default MainLayout
