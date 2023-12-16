import CSS from './index.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className={CSS.headerContainer}>
        <nav className={CSS.headerNav}>
          <div className={CSS.LogoContainer}>
            <span className={CSS.headerLogo}>Films</span>
          </div>
          <ul className={CSS.headerList}>
            <li>
              <NavLink to="/" className={CSS.headerLink}>
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
