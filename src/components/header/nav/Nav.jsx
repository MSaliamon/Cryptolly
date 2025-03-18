import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">
                <a href="" className="nav__link">Exchange</a>
            </li>
            <li className="nav__item">
                <a href="" className="nav__link">Pricing</a>
            </li>
            <li className="nav__item">
                <a href="" className="nav__link">Wallet</a>
            </li>
            <li className="nav__item">
                <a href="" className="nav__link">Company</a>
            </li>
            <li className="nav__item">
                <a href="" className="nav__link">Blog</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav