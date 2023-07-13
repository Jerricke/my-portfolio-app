function NavBar() {


    return (
        <header>
            <a href="#Hero"><h2 className="nameLogo">Jerrick Ee</h2></a>
            <nav>
                <ul className="items">
                    <li className="navBtn"><a href="#About">About</a></li>
                    <li className="navBtn"><a href="#ProjectSection">Projects</a></li>
                    <li className="navBtn"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;