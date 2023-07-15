import { Outlet} from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
            <NavBar />
            {/* <NavLink to="/">Home</NavLink> */}
            {/* <NavLink to="about">About</NavLink> */}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}