import CSS from './index.module.css';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <>
      <div className={CSS.headerContainer}>
        <nav className={CSS.headerNav}>
          <div className={CSS.LogoContainer}>
            <Link to="/">
              <span className={CSS.headerLogo}>Filmoteka</span>
            </Link>
          </div>
          <ul className={CSS.headerList}>
            <li>
              <NavLink
                to="/"
                className={`${CSS.headerLink} ${
                  location.pathname.includes('/goit-react-hw-05-movies')
                    ? CSS.active
                    : ''
                }`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={CSS.headerLink}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
