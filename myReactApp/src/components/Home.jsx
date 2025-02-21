import { Link, Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const Home = () => {
  return (
    <div className="home">
      <Header />
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/login"> LOGIN </Link>
          </li>
          <li>
            <Link to="/register"> REGISTER </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Home