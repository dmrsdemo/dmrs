import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./routes/ScrollToTop"
function App() {
  return (
    <ScrollToTop>
      <div className="flex flex-col min-h-screen font-red-hat">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ScrollToTop>
  )
}

export default App
