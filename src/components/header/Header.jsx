import './Header.scss';
import Nav from './nav/Nav';
import logo from '../../assets/homepage/svg/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
        <Link to="/" className="logo"><img src={logo} alt="logo" className="logo__img" /></Link>
        <Nav />
        <div className="header-btns">
            <button className="header-btns__login"> <Link to="/SignIn" className='header-btns__login-link'>Sign In</Link> </button>
            <button className="header-btns__reges button"><Link to="/SignUp" className='header-btns__reges-link'>Get Started</Link></button>
        </div>
    </header>
  )
}

export default Header

