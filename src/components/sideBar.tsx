import '../assets/css/sideBar.css';
import Nav from 'react-bootstrap/Nav';
import { FcHome, FcSearch } from 'react-icons/fc';
import { RiPlayListAddFill } from 'react-icons/ri';
import { MdFavorite } from 'react-icons/md';
const SideBar = (): JSX.Element => {
    return (
        <aside className="side-bar">
            {/* <nav className="side-bar__nav">
                <ul className="side-bar__nav-items">
                    <li>
                          Home
                    </li>
                    <li>
                          Search
                    </li>
                    <li>
                          Favorites
                    </li>
                    <li>
                          Playlists
                    </li>
                </ul>
            </nav> */}
            <Nav style={{ color: "white!important" }} className="flex-sm-column h-50">
                <Nav.Link href="/home"><FcHome /> HOME</Nav.Link>
                <Nav.Link eventKey="link-1"><FcSearch /> SEARCH</Nav.Link>
                <Nav.Link eventKey="link-2"> <MdFavorite /> FAVORITE</Nav.Link>
                <Nav.Link eventKey="link-3"><RiPlayListAddFill /> PLAYLIST</Nav.Link>
            </Nav>
        </aside>
    )
}

export default SideBar;