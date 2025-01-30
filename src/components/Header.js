import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
    return (
        <header className="header">
            <div className="nav-container">
                <Link to="/" className="logo-link">
                    <img 
                        src={logo} 
                        alt="Site Logo" 
                        className="logo"
                    />
                </Link>
                
                <nav className="nav-links">
                    {/* <Link to="/movies" className="nav-link">
                        Filmes
                    </Link> */}
            
                </nav>
            </div>
        </header>
    );
}

export default Header;