import './Header.scss';
import Nav from './nav/Nav';
import logo from '../../assets/homepage/svg/logo.svg';

function Header() {
  return (
    <header className="header">
        <a href="#" className="logo"><img src={logo} alt="logo" className="logo__img" /></a>
        <Nav />
        <div className="header-btns">
            <button className="header-btns__login">Sign In</button>
            <button className="header-btns__reges button">Get Started</button>
        </div>
    </header>
  )
}

export default Header

