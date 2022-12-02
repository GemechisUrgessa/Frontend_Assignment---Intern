import '../assets/css/header.css';
import { FaMoon } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs';
import headerImage from '../assets/images/header_image.jpg';
const Header = (): JSX.Element => {
    return (
        <header className="header" style={{ backgroundImage: `url(${headerImage})`, backgroundPosition: 'left', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
            <div className="header__content">
                <h1>Your favorite tunes</h1>
                <p>All <BsFillSunFill className="sun-icon" /> and all <FaMoon className="night-icon" /></p>
            </div>
        </header>
    )
}

export default Header;